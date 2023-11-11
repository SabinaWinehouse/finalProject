const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { UNAUTHORIZED } = require('../constants/errorMessages');
const JWT_SECRET = require('../configs/jwt.config');

module.exports = (req, res, next) => {
  const { authorization = '' } = req.headers;

  if (!authorization && !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError(UNAUTHORIZED));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return next(new UnauthorizedError(UNAUTHORIZED));
  }

  req.user = payload;
  return next();
};
