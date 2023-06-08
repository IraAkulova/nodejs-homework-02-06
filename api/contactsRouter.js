const express = require('express');
const contactsRouter = express.Router();

const { get,
  getById,
  create,
  update,
  updateFavorite,
  remove} = require('../controllers/contacts');
const {isValidId} = require('../middlewares');
const {validateBody} = require('../decorators');
const { schemas } = require('../models/contact');

contactsRouter.get('/', get);

contactsRouter.get('/:id', isValidId, getById);

contactsRouter.post('/', validateBody(schemas.contactSchema), create);

contactsRouter.put('/:id', validateBody(schemas.contactSchema), isValidId, update);

contactsRouter.patch('/:id/favorite', isValidId, validateBody(schemas.updateFavoriteSchema), updateFavorite);

contactsRouter.delete('/:id', isValidId, remove);

module.exports = contactsRouter;