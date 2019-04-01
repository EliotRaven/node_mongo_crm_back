const { UserSessionModel, UserModel } = require('../database')

const authMiddleware = async (req, res, next) => {
  const authToken = req.cookies.auth_token || req.header('auth-token');

  if (!authToken) {
    return next(new Error('You must be logged in to view this page.'));
  }

  const session = await UserSessionModel.findOne({token: authToken});

  if (!session) {
    return next(new Error('You must be logged in to view this page.'));
  }

  const user = await UserModel.findOne({_id: session.user_id});

  if (!user) {
    return next(new Error('You must be logged in to view this page.'));
  }

  req.user = user;

  next();
}

module.exports = authMiddleware