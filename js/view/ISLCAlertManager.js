// Copyright 2018-2020, University of Colorado Boulder

/**
 * Base type for all AlertManager instances. In general AlertManagers are responsible for sending alerts through the
 * utteranceQueue powering the aria-live alerts. This base type covers alerting that occurs due to changes in the
 * ISLCModel. Subtype alert managers are likely needed to alert state that is added in ISLCModel subtypes.
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Michael Barlow (PhET Interactive Simulations)
 */

import ActivationUtterance from '../../../utterance-queue/js/ActivationUtterance.js';
import inverseSquareLawCommon from '../inverseSquareLawCommon.js';
import ISLCA11yStrings from '../ISLCA11yStrings.js';

// strings
const forceValuesHiddenString = ISLCA11yStrings.forceValuesHidden.value;

class ISLCAlertManager {

  /**
   * @param {ISLCModel} model
   * @param {ForceDescriber} forceDescriber
   */
  constructor( model, forceDescriber ) {

    // @protected
    this.forceDescriber = forceDescriber;
    this.model = model;

    // @public {Utterance} - utterances to be added to utteranceQueue, can be used to leverage
    // alertStableDelay feature so this alert content doesn't hit the user too frequently
    this.showForceValuesUtterance = new ActivationUtterance();
  }

  /**
   * Alert for when the show force values Property changes
   * @param {boolean} showForceValues
   * @public
   */
  alertShowForceValues( showForceValues ) {
    this.showForceValuesUtterance.alert = this.getShowForceValuesAlert( showForceValues );
    phet.joist.sim.utteranceQueue.addToBack( this.showForceValuesUtterance );
  }

  /**
   * Get an alert describing the change in whether force values are shown or hidden.
   * @public
   *
   * @param {boolean} showForceValues
   * @return {string}
   */
  getShowForceValuesAlert( showForceValues ) {
    let alert = '';
    if ( showForceValues ) {
      alert = this.forceDescriber.getValuesInUnitsText();
    }
    else {
      alert = forceValuesHiddenString;
    }
    return alert;
  }
}

inverseSquareLawCommon.register( 'ISLCAlertManager', ISLCAlertManager );
export default ISLCAlertManager;