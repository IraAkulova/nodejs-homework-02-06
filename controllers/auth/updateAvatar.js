const { ctrlWrapper } = require("../../decorators");
const { resizeImg } = require('../../helpers');
const path = require('path');
const fs = require('fs/promises');
const User = require("../../models/user");

const avatarsDir = path.join(__dirname, '../', '../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    if (!req.file) {
        return res.send('Please upload a file')
    }
    const { path: tempUpload, originalname } = req.file;

    resizeImg(tempUpload);

    const filename = `${_id}_${originalname}`
    const resultUpload = path.join(avatarsDir, filename);

    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join('avatars', filename);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.status(200).json({
        avatarURL,
    })
};

module.exports = {
    updateAvatar: ctrlWrapper(updateAvatar)
};