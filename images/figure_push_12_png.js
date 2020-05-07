/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;