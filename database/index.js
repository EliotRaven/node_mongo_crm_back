const mongoose = require('mongoose');
const db       = process.env.DB_URL;

mongoose.connect(db, {useNewUrlParser: true});

module.exports = {
  ArticleModel: require('./model/article.model'),
  RoleModel: require('./model/role.model'),
  UserModel: require('./model/user.model'),
  CommentModel: require('./model/comment.model'),
  UserSessionModel: require('./model/user-session.model'),
};