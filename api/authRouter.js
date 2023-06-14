const express = require("express");
const authRouter = express.Router();

const { validateBody } = require("../decorators");
const authSchema = require("../schemas/authSchema");
const subscribtionSchema = require('../schemas/subscribtionSchema')
const auth = require("../middlewares/auth");
const { isValidId } = require('../middlewares');

const { register, login, logout, getCurrent, updateSubscription } = require("../controllers/auth");

authRouter.post("/register", validateBody(authSchema), register);
authRouter.post("/login", validateBody(authSchema), login);
authRouter.post("/logout", auth, logout);
authRouter.get("/current", auth, validateBody(authSchema), getCurrent);
authRouter.patch('/:id/subscription', auth, isValidId, validateBody(subscribtionSchema), updateSubscription);

module.exports = authRouter;
