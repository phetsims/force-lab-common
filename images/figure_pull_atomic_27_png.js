/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;