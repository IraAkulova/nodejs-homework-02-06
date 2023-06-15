const { register } = require('../auth/register');
const { login } = require('../auth/login');
const { logout } = require('../auth/logout');
const { getCurrent } = require('../auth/gerCurrent');
const { updateSubscription } = require('../auth/updateSubscription');
const { updateAvatar } = require('../auth/updateAvatar');

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
};