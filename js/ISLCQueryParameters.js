// Copyright 2017-2020, University of Colorado Boulder

/**
 * Query parameters for inverse-square-law-common
 *
 * @author Jesse Greenberg
 */

import inverseSquareLawCommon from './inverseSquareLawCommon.js';

const ISLCQueryParameters = QueryStringMachine.getAll( {

  // when flagged, shows a grid in the ScreenView that visualizes the possible positions
  // for the objects (kept after code review for future development debugging)
  showGrid: {
    type: 'flag'
  },

  // Add horizontal lines at the ruler region boundaries, add crosshairs on the ruler so you can see the point that
  // is being tested, and print the region names to the console, so you can see them in the developer tools.
  showRulerRegions: {
    type: 'flag'
  },

  // Shows boundary positions of the two objects, as .  The boundary positions for each
  // object will change depending on the size and position of both objects.
  showDragBounds: { type: 'flag' },

  // Enables prototype "self voicing" feature set, which uses the Web Speech API to read content from the sim
  // without the use of a screen reader. This is being tested for the first time in gravity-force-lab-basics, and so this query
  // parameter will be used by the ISLC dependency repos, see https://github.com/phetsims/gravity-force-lab-basics/issues/193
  selfVoicing: {
    type: 'string',
    defaultValue: null,
    validValues: [ null, 'cursor', 'levels' ]
  }
} );

inverseSquareLawCommon.register( 'ISLCQueryParameters', ISLCQueryParameters );

export default ISLCQueryParameters;