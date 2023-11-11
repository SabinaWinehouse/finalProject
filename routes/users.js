const express = require('express');
const { getMe } = require('../controllers/userController');

const usersRouter = express.Router();
usersRouter.get('/me', getMe);

module.exports = usersRouter;
