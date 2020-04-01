/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
