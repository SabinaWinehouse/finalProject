const notFoundRouter = require('express').Router();
const { NOT_FOUND } = require('../constants/errorMessages');
const NotFoundError = require('../errors/NotFoundError');

notFoundRouter.all('/', (req, res, next) => {
  next(new NotFoundError(NOT_FOUND));
});

module.exports = notFoundRouter;
