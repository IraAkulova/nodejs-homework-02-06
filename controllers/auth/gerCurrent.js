const { ctrlWrapper } = require("../../decorators");

const getCurrent = async(req, res)=> {
    const {email} = req.user;

    res.json({
        email,
    })
};

module.exports = {
    getCurrent: ctrlWrapper(getCurrent)
};