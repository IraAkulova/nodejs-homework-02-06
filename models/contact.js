const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require('joi');
const {handleMongooseError} = require('../middlewares');

const contact = new Schema(
   {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

contact.post("save", handleMongooseError);

const Contact = mongoose.model("contact", contact);

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/).messages({'string.pattern.base': `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`}).required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const schemas = {
  contactSchema,
  updateFavoriteSchema,
}

module.exports = {
  Contact,
  schemas
};