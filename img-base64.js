const path = require('path');
const util = require('util');
const fs = require('fs-extra');

function imgBufToBase64(buf, ext) {
  return `data:image/${ext};base64,${buf.toString('base64')}`;
}

exports.imgToBase64 = async function imgToBase64(file) {
  const ext = path.extname(file).substr(1);
  const buf = await fs.readFile(file);
  return imgBufToBase64(buf, ext);
};

const regex = /^data:image\/([\w+]+);base64,([\s\S]+)$/;
exports.base64ToImg = async function base64ToImg(data, destPath, name) {
  const mathes = data.match(regex);
  if (mathes.length !== 3) throw new Error('Invaild base64 encoded image');

  const file = path.join(destPath, `${name}.${mathes[1]}`);
  await fs.writeFile(file, new Buffer(mathes[2], 'base64'));
};

exports.imgBufToBase64 = imgBufToBase64;