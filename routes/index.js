const express = require('express');
const router = express.Router();

const User = require('../user')
const Role = require('../role')
const Article = require('../article')
const Comment = require('../comment')
const Statistic = require('../statistic')

router.use('/article', Article.ArticleRoutes)
router.use('/user', User.UserRoutes)
router.use('/role', Role.RoleRoutes)
router.use('/comment', Comment.CommentRoutes)
router.use('/statistic', Statistic.StatisticRoutes)

module.exports = router;
