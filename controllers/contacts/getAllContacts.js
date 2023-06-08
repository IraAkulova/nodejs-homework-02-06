const {Contact} = require('../../models/contact');
const {ctrlWrapper} = require("../../decorators");

const get = async (req, res, next) => {
    const results = await Contact.find()
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