const { ctrlWrapper } = require("../../decorators");

const getCurrent = async(req, res)=> {
    const {email, name} = req.user;

    res.json({
        email,
        name,
    })
};

module.exports = {
    getCurrent: ctrlWrapper(getCurrent)
};