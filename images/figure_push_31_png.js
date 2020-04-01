/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
