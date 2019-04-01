const ArticleController   = require('./article.controller'),
      CommentController   = require('./comment.controller'),
      RoleController      = require('./role.controller'),
      UserController      = require('./user.controller'),
      StatisticController = require('./statistic.controller'),
      AuthController      = require('./auth.controller')

module.exports = {
  ArticleController: new ArticleController(),
  CommentController: new CommentController(),
  RoleController: new RoleController(),
  UserController: new UserController(),
  StatisticController: new StatisticController(),
  AuthController: new AuthController()
};