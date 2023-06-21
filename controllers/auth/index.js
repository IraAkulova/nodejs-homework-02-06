const { register } = require('../auth/register');
const { verifyEmail } = require('../auth/verifyEmail');
const { resendVerifyEmail } = require('../auth/resendVerifyEmail');
const { login } = require('../auth/login');
const { logout } = require('../auth/logout');
const { getCurrent } = require('../auth/gerCurrent');
const { updateSubscription } = require('../auth/updateSubscription');
const { updateAvatar } = require('../auth/updateAvatar');

module.exports = {
  register,
  verifyEmail,
  resendVerifyEmail,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
};