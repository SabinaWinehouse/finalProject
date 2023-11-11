const validator = require('validator');
const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error('string.uri');
};

const validateId = (value, helpers) => {
  if (ObjectId.isValid(value)) {
    return value;
  }
  return helpers.message('Invalid id');
};

const validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

const validateArticle = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    source: Joi.string().required(),
    date: Joi.string().required(),
    link: Joi.string().required().custom(validateURL),
    image: Joi.string().required().custom(validateURL),
  }),
});

const validateObjectId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().custom(validateId),
  }),
});

module.exports = {
  validateAuthentication,
  validateArticle,
  validateUser,
  validateObjectId,
};
