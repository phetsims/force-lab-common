/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;