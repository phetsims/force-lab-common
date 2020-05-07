/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;