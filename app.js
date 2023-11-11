require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes/main');
const PORT = require('./configs/port.config');
const DB_ADDRESS = require('./configs/db.config');
const serverErrorHandler = require('./middlewares/serverErrorHandler');
const { rateLimiter } = require('./middlewares/rateLimit');

const app = express();
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(serverErrorHandler);

mongoose
  .connect(DB_ADDRESS)
  .then(() => {})
  .catch(() => {});

app.listen(PORT, () => {});
