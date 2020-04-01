/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
