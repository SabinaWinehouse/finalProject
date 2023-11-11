const express = require('express');
const articlesRouter = require('./articles');
const usersRouter = require('./users');
const notFoundRouter = require('./404');
const { validateUser, validateAuthentication } = require('../middlewares/validations');
const { register, login } = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/signup', validateUser, register);
router.post('/signin', validateAuthentication, login);

router.use(auth);
router.use('/articles', articlesRouter);
router.use('/users', usersRouter);
router.use('/*', notFoundRouter);

module.exports = router;
