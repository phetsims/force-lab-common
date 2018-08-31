// Copyright 2017-2018, University of Colorado Boulder

/**
 * Common type for model items in inverse square law sims.
 *
 * @author Jesse Greenberg (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var DerivedProperty = require( 'AXON/DerivedProperty' );
  var DerivedPropertyIO = require( 'AXON/DerivedPropertyIO' );
  var inherit = require( 'PHET_CORE/inherit' );
  var inverseSquareLawCommon = require( 'INVERSE_SQUARE_LAW_COMMON/inverseSquareLawCommon' );
  var ISLCConstants = require( 'INVERSE_SQUARE_LAW_COMMON/ISLCConstants' );
  var NumberProperty = require( 'AXON/NumberProperty' );
  var Property = require( 'AXON/Property' );
  var PropertyIO = require( 'AXON/PropertyIO' );
  var Range = require( 'DOT/Range' );
  var RangeIO = require( 'DOT/RangeIO' );
  var RangeWithValue = require( 'DOT/RangeWithValue' );

  // ifphetio
  var NumberIO = require( 'ifphetio!PHET_IO/types/NumberIO' );

  /**
   * @param {number} initialMass
   * @param {Vector2} initialPosition
   * @param {Range} valueRange
   * @param {Property.<boolean>} constantRadiusProperty
   * @param {Tandem} tandem
   * @param {Object} [options]
   * @constructor
   */
  function ISLCObject( initialMass, initialPosition, valueRange, constantRadiusProperty, tandem, options ) {

    var self = this;

    options = _.extend( {
      leftObjectBoundary: ISLCConstants.LEFT_OBJECT_BOUNDARY,
      rightObjectBoundary: ISLCConstants.RIGHT_OBJECT_BOUNDARY,
      tandemUnits: 'kilograms'
    }, options );

    // @public
    this.positionProperty = new NumberProperty( initialPosition, {
      tandem: tandem.createTandem( 'positionProperty' ),
      units: 'meters',
      range: new Range( options.leftObjectBoundary, options.rightObjectBoundary )
    } );

    // @public
    this.valueProperty = new NumberProperty( initialMass, {
      tandem: tandem.createTandem( 'valueProperty' ),
      units: options.tandemUnits, // REVIEW: Consider documenting units may be measuring mass or charge.
      range: valueRange
    } );

    // REVIEW: type doc
    // @public - mass radius will change with value
    // since ISLCObjects are never destroyed, we do not need to dispose of this property
    // REVIEW: Use Property instead of property in above comment
    this.radiusProperty = new DerivedProperty( [ this.valueProperty, constantRadiusProperty ],
      function( valueProperty, constantRadius ) {
        return constantRadius ? options.constantRadius : self.calculateRadius( valueProperty );
      }, {
        tandem: tandem.createTandem( 'radiusProperty' ),
        units: 'meters',
        phetioType: DerivedPropertyIO( NumberIO )
      }
    );

    // a11y - initialize the accessible slider
    var enabledRange = new RangeWithValue( options.leftObjectBoundary, options.rightObjectBoundary );

    // REVIEW: type doc
    // @public - set by ISLCModel when the force changes
    this.enabledRangeProperty = new Property( enabledRange, {
      tandem: tandem.createTandem( 'enabledRangeProperty' ),
      phetioType: PropertyIO( RangeIO )
    } );

    // @public - flag to check if the object is being dragged by the user
    //           set in the drag handler
    this.isDragging = false;

    // @public - flag to check whether object's radius was updated, used to determine positioning
    this.radiusLastChanged = false;

    // @public
    this.valueRange = valueRange;
  }

  inverseSquareLawCommon.register( 'ISLCObject', ISLCObject );

  return inherit( Object, ISLCObject, {

    /**
     * Calculate radius for the object - must be implemented in subtypes.
     *
     * @public
     */
    calculateRadius: function() {
      throw new Error( 'calculateRadius must be implemented in descendent types' );
    }
  } );
} );