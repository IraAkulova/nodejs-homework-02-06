const {Contact} = require('../../models/contact');
const {ctrlWrapper} = require("../../decorators");

const get = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const results = await Contact.find({owner, ...req.query}, '-createdAt -updatedAt', {skip, limit})
    res.json({
      status: 'success',
      code: 200,
      data: {
        contacts: results,
      },
    }) 
}

module.exports = {
  get: ctrlWrapper(get),
}