/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
