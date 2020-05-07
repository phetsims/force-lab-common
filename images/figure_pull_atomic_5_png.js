/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;