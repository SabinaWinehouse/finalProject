const Article = require('../models/article');
const { BAD_REQUEST, ARTICLE_NOT_FOUND, FORBIDDEN } = require('../constants/errorMessages');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const getArticles = (req, res, next) => {
  const owner = req.user._id;

  Article.find({ owner })
    .then((articles) => res.status(200).send({ data: articles }))
    .catch(next);
};

const createArticle = (req, res, next) => {
  const owner = req.user._id;
  const {
    keyword, title, text, source, date, link, image,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    source,
    date,
    link,
    image,
    owner,
  })
    .then((article) => res.status(201).send({ data: article }))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST));
      } else {
        next(error);
      }
    });
};

const deleteArticle = (req, res, next) => {
  const { _id: articleId } = req.params;
  const { _id: userId } = req.user;

  Article.findById(articleId)
    .orFail(new NotFoundError(ARTICLE_NOT_FOUND))
    .select('+owner')
    .then(async ({ owner }) => {
      if (userId === String(owner)) {
        const data = await Article.findByIdAndRemove(articleId);
        return res.send(data);
      }
      return next(new ForbiddenError(FORBIDDEN));
    })
    .catch(next);
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
