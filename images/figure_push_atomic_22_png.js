/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;