// Copyright 2020, University of Colorado Boulder

/**
 * Uses the Web Speech API to produce speech from the browser. This is a prototype, DO NOT USE IN PRODUCTION CODE.
 * There is no speech output until the webSpeaker has been initialized. Supported voices will depend on platform.
 * For each voice, you can customize the rate and pitch. Only one webSpeaker should be active at a time and so this
 * type is a singleton.
 *
 * @author Jesse Greenberg
 */

import platform from '../../../phet-core/js/platform.js';
import inverseSquareLawCommon from '../inverseSquareLawCommon.js';
import NumberProperty from '../../../axon/js/NumberProperty.js';
import Property from '../../../axon/js/Property.js';
import Range from '../../../dot/js/Range.js';
import stripEmbeddingMarks from '../../../phet-core/js/stripEmbeddingMarks.js';
import EnabledComponent from '../../../sun/js/EnabledComponent.js';
import Emitter from '../../../axon/js/Emitter.js';

/**
 * @mixes EnabledComponent
 */
class WebSpeaker {
  constructor() {

    // @public {null|SpeechSynthesisVoice}
    this.voiceProperty = new Property( null );

    // @public {NumberProperty} - controls the speaking rate of Web Speech
    this.voiceRateProperty = new NumberProperty( 1.4, { range: new Range( 1, 1.8 ) } );

    // {NumberProperty} - controls the pitch of the synth
    this.voicePitchProperty = new NumberProperty( 1.02, { range: new Range( 1, 1.1 ) } );

    this.startSpeakingEmitter = new Emitter();
    this.endSpeakingEmitter = new Emitter();

    // create the synthesizer
    this.synth = window.speechSynthesis;

    // @public {SpeechSynthesisVoice[]} - possible voices for Web Speech synthesis
    this.voices = [];

    // @public {boolean} - is the WebSpeaker initialized for use? This is prototypal so it isn't always initialized
    this.initialized = false;

    // initialize the EnabledComponent mixin, giving this a @public enabledProperty
    this.initializeEnabledComponent();

    // @public {boolean} - a more interal way to disable speaking - the enabledProperty
    // can be set by the user and is publicly observable for other things - but if
    // you need to temporarily shut down speaking without changing that observable
    // you can set onHold to true to prevent all speaking. Useful in cases like
    // the ResetAllButton where you want to describe the reset without
    // any of the other changing Properties in that interaction
    this.onHold = false;

    // fixes a bug on Safari where the `start` and `end` Utterances don't fire! The
    // issue is (apparently) that Safari internally clears the reference to the
    // Utterance on speak which prevents it from firing these events at the right
    // time - fix borrowed from
    // https://stackoverflow.com/questions/23483990/speechsynthesis-api-onend-callback-not-working
    // Unfortunately, this also introduces a memory leak, we should be smarter about
    // clearing this, though it is a bit tricky since we don't have a way to know
    // when we are done with an utterance - see #215
    this.utterances = [];

    // On chrome, synth.getVoices() returns an empty array until the onvoiceschanged event, so we have to
    // wait to populate
    const populateVoicesListener = () => {
      this.populateVoices();

      // remove the listener after they have been populated once from this event
      this.synth.onvoiceschanged = null;
    };
    this.synth.onvoiceschanged = populateVoicesListener;
  }

  /**
   * Indicate that the webSpeaker is ready for use, and attempt to populate voices (if they are ready yet).
   * @public
   */
  initialize() {
    this.initialized = true;

    // try to populate voice options first
    this.populateVoices();
  }

  /**
   * Get the available voices for the synth, and set to default.
   * @private
   */
  populateVoices() {
    this.voices = this.synth.getVoices();
    this.voiceProperty.set( this.voices[ 0 ] );
  }

  /**
   * Use speech synthesis to speak an utterance. No-op unless webSpeaker is initialized.
   * @public
   *
   * @param {string} utterThis
   * @param {boolean} withCancel - if true, any utterances remaining in the queue will be removed and this utterance
   *                               will take priority. Hopefully this works on all platforms, if it does not we
   *                               need to implement our own queing system.
   */
  speak( utterThis, withCancel = true ) {
    if ( this.initialized && this.enabled && !this.onHold ) {
      withCancel && this.synth.cancel();

      // since the "end" event doesn't come through all the time after cancel() on
      // safari, we broadcast this right away to indicate that any previous speaking
      // is done
      if ( withCancel ) {
        this.endSpeakingEmitter.emit();
      }

      // embidding marks (for i18n) impact the output, strip before speaking
      const utterance = new SpeechSynthesisUtterance( stripEmbeddingMarks( utterThis ) );
      utterance.voice = this.voiceProperty.value;
      utterance.pitch = this.voicePitchProperty.value;
      utterance.rate = this.voiceRateProperty.value;

      // kep a reference to teh WebSpeechUtterance or Safari, so the browser
      // doesn't dispose of it before firing, see #215
      this.utterances.push( utterance );

      const startListener = () => {
        this.startSpeakingEmitter.emit();
        utterance.removeEventListener( 'start', startListener );
      };

      const endListener = () => {
        this.endSpeakingEmitter.emit();
        utterance.removeEventListener( 'end', endListener );
      };

      utterance.addEventListener( 'start', startListener );
      utterance.addEventListener( 'end', endListener );

      // on safari, giving a bit of a delay to the speak request makes the `end`
      // SpeechSynthesisUtterance event come through much more consistently
      if ( platform.safari ) {
        window.setTimeout( () => {
          this.synth.speak( utterance );
        }, 500 );
      }
      else {
        this.synth.speak( utterance );
      }
    }
  }
}

EnabledComponent.mixInto( WebSpeaker );

const webSpeaker = new WebSpeaker();

inverseSquareLawCommon.register( 'webSpeaker', webSpeaker );
export default webSpeaker;