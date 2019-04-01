const express = require('express');
const router = express.Router();

const ArticleRouter = require('./article.route');
const UserRouter = require('./user.route');
const RoleRouter = require('./role.route');
const CommentRouter = require('./comment.route');
const StatisticRouter = require('./statistic.route');

router.use('/article', ArticleRouter)
router.use('/user', UserRouter)
router.use('/role', RoleRouter)
router.use('/comment', CommentRouter)
router.use('/statistic', StatisticRouter)

module.exports = router;
