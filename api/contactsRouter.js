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
const {schemas} = require('../models/contact')

contactsRouter.get('/contacts', get);

contactsRouter.get('/contacts/:id', isValidId, getById);

contactsRouter.post('/contacts', validateBody(schemas.addSchema), create);

contactsRouter.put('/contacts/:id', validateBody(schemas.addSchema), isValidId, update);

contactsRouter.patch('/contacts/:id/favorite', isValidId, validateBody(schemas.updateFavoriteSchema), updateFavorite);

contactsRouter.delete('/contacts/:id', isValidId, remove);

module.exports = contactsRouter;