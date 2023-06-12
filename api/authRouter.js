const express = require('express');
const authRouter = express.Router();

const { validateBody } = require('../decorators');
const { schemas } = require('../models/user');
// const { auth } = require('../middlewares/auth')

const { register, login } = require('../controllers/auth');

// console.log(getCurrent)

authRouter.post('/register', validateBody(schemas.userSchema), register);
authRouter.post('/login', validateBody(schemas.userSchema), login);
// authRouter.get("/current", auth, getCurrent);


module.exports = authRouter;