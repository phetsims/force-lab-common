/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;
