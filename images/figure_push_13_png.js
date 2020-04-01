/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
