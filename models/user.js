// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema, model } = require('mongoose');
const Joi = require('joi');
const {handleMongooseError} = require('../middlewares');

const userSchema = new Schema(
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

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const authSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const schemas = {
  authSchema
}

module.exports = {
  schemas,
  User,
};
