const { SERVER_ERROR_CODE } = require('../constants/errorCodes');
const { SERVER_ERROR } = require('../constants/errorMessages');

const serverErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || SERVER_ERROR_CODE;
  const errorMessage = statusCode === 500 ? SERVER_ERROR : err.message;

  res.status(statusCode).send({ errorMessage });
  next();
};

module.exports = serverErrorHandler;
