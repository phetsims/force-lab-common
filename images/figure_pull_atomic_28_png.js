/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
