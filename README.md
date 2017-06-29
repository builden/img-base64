# img-base64
image to base64 &amp; base64 to image

## How to use
```js
const {imgToBase64, base64ToImg} = require('img-base64');

async function imgTrans() {
  const base64Str = await imgToBase64(filePath);
  
  await base64ToImg(base64Str, fileDir, fileName);
}

imgTrans();
```
