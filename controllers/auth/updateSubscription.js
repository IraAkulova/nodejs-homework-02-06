const User = require('../../models/user');
const {HttpError} = require("../../helpers");
const {ctrlWrapper} = require("../../decorators");

const updateSubscription = async (req, res, next) => {
  const { id } = req.params
    const { error } = req.body;
  if (error) {
      throw HttpError(400, 'Missing required name field')
    }
  const result = await User.findByIdAndUpdate({ _id: id }, req.body, { new: true });
  console.log(result)
    if (result) {
      res.json({
        status: 'success',
        code: 200,
        data: { user: result },
      })
    } else {
      throw HttpError(404, `Not found user id: ${id}`)
    }
}

module.exports = {
  updateSubscription: ctrlWrapper(updateSubscription)
}