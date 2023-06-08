const express = require('express');
const authRouter = express.Router();

const { validateBody } = require('../decorators');
const { schemas } = require('../models/user');

const { register } = require('../controllers/auth');

authRouter.post('/register', validateBody(schemas.userSchema), register)

module.exports = authRouter;