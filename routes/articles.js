const express = require('express');
const { getArticles, createArticle, deleteArticle } = require('../controllers/articleController');
const { validateArticle, validateObjectId } = require('../middlewares/validations');

const articlesRouter = express.Router();
articlesRouter.get('/', getArticles);
articlesRouter.post('/', validateArticle, createArticle);
articlesRouter.delete('/:_id', validateObjectId, deleteArticle);

module.exports = articlesRouter;
