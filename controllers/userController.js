const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const JWT_SECRET = require('../configs/jwt.config');
const UnauthorizedError = require('../errors/UnauthorizedError');
const NotFoundError = require('../errors/NotFoundError');
const ConflictError = require('../errors/ConflictError');
const {
  CONFLICT,
  UNAUTHORIZED,
  INCORRECT_SIGNIN_DATA,
  USER_NOT_FOUND,
} = require('../constants/errorMessages');
const BadRequestError = require('../errors/BadRequestError');

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((data) => {
      const token = jwt.sign({ _id: data._id }, JWT_SECRET, {
        expiresIn: '7d',
      });
      const { password: userPassword, ...user } = data._doc;
      res.send({ data: user, token });
    })
    .catch(() => {
      next(new UnauthorizedError(UNAUTHORIZED));
    });
};

const register = (req, res, next) => {
  const { name, email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new ConflictError(CONFLICT);
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hash) => User.create({ name, email, password: hash }))
    .then((data) => {
      const { password: userPassword, ...user } = data._doc;
      res.status(201).send({ data: user });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequestError(INCORRECT_SIGNIN_DATA));
      } else {
        next(error);
      }
    });
};

const getMe = (req, res, next) => {
  const { _id: userId } = req.user;

  User.findById(userId)
    .orFail(new NotFoundError(USER_NOT_FOUND))
    .then((user) => res.status(200).send({ data: user }))
    .catch(next);
};

module.exports = {
  login,
  register,
  getMe,
};
