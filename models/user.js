const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require('joi');
const {handleMongooseError} = require('../middlewares');

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

user.post("save", handleMongooseError);

const User = mongoose.model("user", user);

const userSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const schemas = {
  userSchema
}

module.exports = {
  User,
  schemas
};
