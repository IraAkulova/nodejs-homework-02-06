const jimp = require("jimp");
 

const resizeImg = async (file) => {
jimp.read(file)
  .then((img) => {
    return img
      .resize(256, 256)
      .writeAsync(file);
  })
  .catch((err) => {
    console.error(err);
  });
}

module.exports = resizeImg;    