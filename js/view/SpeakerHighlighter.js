// Copyright 2020, University of Colorado Boulder

/**
 * Manages highlights to indicate the state of self-voicing speech, as well as what has self voicing content.
 * Some view componnents will have different highlights while information about the object is being spoken,
 * others will have a unique highlight when the object has focus or when a Pointer is over it to indicate
 * that it has self voicing content.
 *
 * Very rough, prototype code. Uncertain whether this design will be around for a while. But if it does, it
 * would be done in scenery as an overlay presumably (like the FocusOverlay).
 *
 * @author Jesse Greenberg
 */

import Shape from '../../../kite/js/Shape.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import Matrix3 from '../../../dot/js/Matrix3.js';
import FocusHighlightFromNode from '../../../scenery/js/accessibility/FocusHighlightFromNode.js';
import Display from '../../../scenery/js/display/Display.js';
import TransformTracker from '../../../scenery/js/util/TransformTracker.js';
import Node from '../../../scenery/js/nodes/Node.js';
import Path from '../../../scenery/js/nodes/Path.js';
import FontAwesomeNode from '../../../sun/js/FontAwesomeNode.js';
import inverseSquareLawCommon from '../inverseSquareLawCommon.js';
import Text from '../../../scenery/js/nodes/Text.js';
import levelSpeakerModel from '../../../scenery-phet/js/accessibility/speaker/levelSpeakerModel.js';

class SpeakerHighlighter extends Node {
  constructor( shapeHitDetector, webSpeaker ) {
    super();

    // the shape for the highlight
    this.highlightShape = new Shape();

    this.speakingPath = new Path( null, {
      fill: 'rgba(255,255,0,0.5)',
      stroke: 'black'
    } );

    // @private {Node} a reference to the active Node that is currently being spoken about
    this.activeTarget = null;

    this.speakablePath = new Path( null, {
      stroke: 'black',
      lineWidth: 0.5
    } );

    this.interactiveHighlightNode = new Node();
    this.interactiveHighlightPath = new FocusHighlightFromNode( null );

    this.interactiveHighlightTransformTracker = null;
    this.existingHighlightNode  = null;

    const bubbleIcon = new FontAwesomeNode( 'comment', { fill: 'grey', scale: 0.75 } );
    const rText = new Text( 'R', { font: new PhetFont( { size: 12 } ), fill: 'white', center: bubbleIcon.center.plusXY( 1, -2 ) } );
    const speakableIcon = new Node( {
      children: [ bubbleIcon, rText ]
    } );
    this.speakablePath.addChild( speakableIcon );

    this.speakableActivated = false;

    const updateSpeakablePathListener = hitTarget => {

      // interactive objects do not have a highlight to indicate that they have self voicing content
      if ( hitTarget !== null && !levelSpeakerModel.getNodeInteractive( hitTarget ) && webSpeaker.enabled ) {
        this.highlightShape = Shape.bounds( hitTarget.globalBounds );
        speakableIcon.rightBottom = hitTarget.globalBounds.rightBottom;
        this.activateSpeakablePath();

        this.activeTarget = hitTarget;
      }
      else {
        this.highlightShape = null;
        this.deactivateSpeakablePath();
        this.deactivateInteractivePath();
      }
    };
    shapeHitDetector.hitShapeEmitter.addListener( hitTarget => {
      updateSpeakablePathListener( hitTarget );

      // behavior specific to mouse input
      const highlightEnabled = webSpeaker.enabled && levelSpeakerModel.showHoverHighlights.get();
      if ( hitTarget !== null && levelSpeakerModel.getNodeInteractive( hitTarget ) && highlightEnabled ) {

        // clear any focus if we are activating this highlight since we will be using Node
        // focusHighlights so we want to make sure they are detached from the FocusOverlay
        Display.focus = null;

        // clear the highlightShape as we will use Node focusHighlights in this mode
        this.highlightShape = null;

        this.activeTarget = hitTarget;
        this.activateInteractivePath();
      }
    } );
    shapeHitDetector.focusHitEmitter.addListener( updateSpeakablePathListener );

    // if pressing down on a new target, clear the old path
    shapeHitDetector.downOnHittableEmitter.addListener( hittable => {
      if ( hittable !== this.activeTarget ) {
        this.deactivateSpeakingPath();
        this.deactivateSpeakablePath();
      }
    } );

    webSpeaker.startSpeakingEmitter.addListener( () => {
      if ( this.speakableActivated ) {
        this.deactivateSpeakablePath();
        this.activateSpeakingPath();
      }
    } );

    webSpeaker.endSpeakingEmitter.addListener( () => {
      this.deactivateSpeakingPath();
      this.activateSpeakablePath();
    } );

    Display.focusProperty.lazyLink( focus => {

      // remove any highlights around interactive Nodes that have speakable content, since
      // the highlight will be used for focus.
      // In the future this may be a feature that is separate from the self-voicing work.
      this.deactivateInteractivePath();

      if ( focus === null ) {

        // clear the 'activeTarget' when focus moves so that we don't keep a highlight for too long
        this.activeTarget = null;
      }
    } );

    this.children = [ this.speakingPath, this.speakablePath, this.interactiveHighlightNode ];
  }

  /**
   * "Activate" the path during speaking, making it visible and giving it the active highlight shape. This is
   * the path that indicates that the object has some content to be read.
   * @private
   */
  activateSpeakablePath() {
    if ( this.highlightShape !== null ) {
      this.speakablePath.visible = true;
      this.speakablePath.shape = this.highlightShape;

      this.speakableActivated = true;
    }
  }

  /**
   * The highlight path becomes invisible, removing any highlighting around the target of the
   * shapeHitDetector. This is the path that indicates that the object has some content to be read.
   *
   * @public
   */
  deactivateSpeakablePath() {
    this.speakablePath.visible = false;
    this.speakablePath.shape = null;

    this.speakableActivated = false;
  }

  /**
   * "Activate" the path during speaking, making it visible and giving it the active highlight shape. This path
   * indicates that the target of the shapeHitDetector is active and the web speaker is actively speaking
   * about it.
   * @private
   */
  activateSpeakingPath() {
    this.speakingPath.visible = true;
    this.speakingPath.shape = this.highlightShape;
  }

  /**
   * The highlight for the speaking path becomes invisible, and is removed. Indicates that the webSpeaker is done
   * speaking.
   * @private
   */
  deactivateSpeakingPath() {
    this.speakingPath.visible = false;
    this.speakingPath.shape = null;
  }

  /**
   * Enable a highlight that indicates that a Node is interactive with a mouse.
   * This should likely be built into FocusOverlay if we decide that this feature
   * is something somethine we want to invest in.
   * @private
   */
  activateInteractivePath() {
    if ( this.activeTarget ) {

      const trailToNode = this.activeTarget.getUniqueTrail();
      this.interactiveHighlightTransformTracker = new TransformTracker( trailToNode );

      const existingHighlight = this.activeTarget.focusHighlight;
      if ( existingHighlight instanceof Node ) {
        existingHighlight.setMatrix( this.interactiveHighlightTransformTracker.matrix );
        this.interactiveHighlightTransformTracker.addListener( this.updateInteractiveHighlightMatrix.bind( this, existingHighlight ) );

        this.existingHighlightNode = existingHighlight;

        // make sure that the line width is updated after becoming visible
        existingHighlight.updateLineWidth();

        // the highlight for the hit target is a Node, add it as a child ot this overlay
        this.interactiveHighlightNode.addChild( existingHighlight );
      }
      else if ( existingHighlight instanceof Shape ) {
        this.interactiveHighlightPath.setShape( existingHighlight );
        this.interactiveHighlightPath.setMatrix( this.interactiveHighlightTransformTracker.matrix );
        this.interactiveHighlightTransformTracker.addListener( this.updateInteractiveHighlightMatrix.bind( this, this.interactiveHighlightPath ) );


        this.interactiveHighlightNode.addChild( this.interactiveHighlightPath );
      }
      else if ( existingHighlight === null ) {
        this.interactiveHighlightPath.setShapeFromNode( this.activeTarget );
        this.interactiveHighlightNode.addChild( this.interactiveHighlightPath );
        this.interactiveHighlightPath.setMatrix( this.interactiveHighlightTransformTracker.matrix );
        this.interactiveHighlightTransformTracker.addListener( this.updateInteractiveHighlightMatrix.bind( this, this.interactiveHighlightPath ) );
      }
    }
  }

  /**
   * @private
   */
  deactivateInteractivePath() {
    if ( this.interactiveHighlightTransformTracker ) {
      this.interactiveHighlightTransformTracker.dispose();
    }

    if ( this.existingHighlightNode ) {
      this.existingHighlightNode.setMatrix( Matrix3.IDENTITY );
      this.existingHighlightNode = null;
    }

    this.interactiveHighlightNode.removeAllChildren();
  }

  /**
   * Update the matrix for the provided highlight Node.
   * @private
   *
   * @param {Node} highlightNode
   */
  updateInteractiveHighlightMatrix( highlightNode ) {
    highlightNode.setMatrix( this.interactiveHighlightTransformTracker.matrix );
  }
}

inverseSquareLawCommon.register( 'SpeakerHighlighter', SpeakerHighlighter );

export default SpeakerHighlighter;
