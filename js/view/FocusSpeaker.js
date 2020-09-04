// Copyright 2020, University of Colorado Boulder

/**
 * A class that makes usually non-focusable things focusable for the self voicing prototype. Text and
 * other non-interactive things need to have a place in the navigation order so that they can be discovered
 * and read in the self-voicing feature set.
 *
 * @author Jesse Greenberg
 */

import inverseSquareLawCommon from '../inverseSquareLawCommon.js';
import levelSpeakerModel from '../../../scenery-phet/js/accessibility/speaker/levelSpeakerModel.js';

class FocusSpeaker {
  constructor() {

    // @private {Node} - so they can potentially be removed later
    this.targetNodes = [];
  }

  /**
   * Add a node to the FocusSpeaker, adding listeners to the objectChangesProperty. When the objectChangesProperty
   * is true, the targetNode becomes focusable so that when focus lands on it information will be spoken.
   * @public
   *
   * @param {Node} targetNode
   */
  addNode( targetNode ) {
    this.targetNodes.push( targetNode );

    levelSpeakerModel.objectChangesProperty.link( objectChanges => {
      if ( objectChanges ) {
        this.makeTargetFocusable( targetNode );
      }
      else {
        this.makeTargetNonFocusable( targetNode );
      }
    } );
  }

  /**
   * Changes the accessible content and representation in the PDOM for the node so that it is focusable.
   * @private
   *
   * @param targetNode
   */
  makeTargetFocusable( targetNode ) {
    assert && assert( targetNode.tagName === null, 'target should have no accessible content before becoming focusable for self-voicing' );
    assert && assert( targetNode.focusable === false, 'target should not be initially focusable' );

    targetNode.tagName = 'div';

    // these nodes have a different highlight managed by SpeakerHighlighter, which indicates what
    // has self-voicing content and when the speaker is talking
    targetNode.focusHighlight = 'invisible';
    targetNode.focusable = true;
  }

  /**
   * Removes the targetNode from the focus order by removing its content from the PDOM.
   * @private
   *
   * @param targetNode
   */
  makeTargetNonFocusable( targetNode ) {
    assert && assert( targetNode.tagName === 'div', 'target should only have default tagname, no other semantics' );
    assert && assert( targetNode.focusable === true, 'target should be initially focusable' );

    targetNode.tagName = null;
    targetNode.focusable = false;
  }
}

const focusSpeaker = new FocusSpeaker();
inverseSquareLawCommon.register( 'focusSpeaker', focusSpeaker );

export default focusSpeaker;
