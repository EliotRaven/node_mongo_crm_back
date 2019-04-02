const UserService = require('./user.service')
const { BaseController } = require('../controller')

class UserController extends BaseController {
  constructor(){
    super({service: UserService})
  }
}

module.exports = new UserController()