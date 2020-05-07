/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;