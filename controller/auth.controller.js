const {AuthService} = require('../service/index')

class AuthController {
  constructor(){
    this.authService = AuthService
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(req, res, next){
    return this.authService.login(req.body).then(({user, session}) => {
      res.cookie('auth_token', session.token);
      res.json({user, session});
    }).catch(next)
  }

  logout(req, res, next) {
    return this.authService.logout(req.body.token).then(data => {
      res.json(data)
    }).catch(next)
  }

}

module.exports = AuthController