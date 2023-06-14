const express = require('express');
const contactsRouter = express.Router();

const { get,
  getById,
  create,
  update,
  updateFavorite,
  remove} = require('../controllers/contacts');
const { isValidId } = require('../middlewares');
const auth = require('../middlewares/auth');
const {validateBody} = require('../decorators');
const { schemas } = require('../models/contact');

contactsRouter.get('/', auth, get);

contactsRouter.get('/:id', auth, isValidId, getById);

contactsRouter.post('/', auth, validateBody(schemas.contactSchema), create);

contactsRouter.put('/:id', auth, validateBody(schemas.contactSchema), isValidId, update);

contactsRouter.patch('/:id/favorite', auth, isValidId, validateBody(schemas.updateFavoriteSchema), updateFavorite);

contactsRouter.delete('/:id', auth, isValidId, remove);

module.exports = contactsRouter;