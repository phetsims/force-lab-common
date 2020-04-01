/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
