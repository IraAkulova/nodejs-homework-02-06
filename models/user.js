const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require('joi');

const user = new Schema(
   {
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: String
},
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", user);

const addSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const schemas = {
  addSchema
}

module.exports = {
  User,
  schemas
};
