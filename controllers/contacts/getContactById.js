const {Contact} = require('../../models/contact');
const {HttpError} = require("../../helpers");
const {ctrlWrapper} = require("../../decorators");

const getById = async (req, res, next) => {
  const { id } = req.params
    const result = await Contact.findById(id);
      if (result) {
      res.json({
        status: 'success',
        code: 200,
        data: { contact: result },
      })
    } else {
      throw HttpError(404, `Contact with ${id} not found`)
    }
}

module.exports = {
  getById: ctrlWrapper(getById),
}
