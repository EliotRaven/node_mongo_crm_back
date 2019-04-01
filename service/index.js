const ArticleService   = require('./article.service'),
      UserService      = require('./user.service'),
      RoleService      = require('./role.service'),
      CommentService   = require('./comment.service'),
      StatisticService = require('./statistic.service'),
      AuthService      = require('./auth.service')

module.exports = {
  ArticleService: new ArticleService(),
  UserService: new UserService(),
  RoleService: new RoleService(),
  CommentService: new CommentService(),
  StatisticService: new StatisticService(),
  AuthService: new AuthService()
};