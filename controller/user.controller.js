const {UserService} = require('../service/index')
const ResourceController = require('./resource.controller')

class UserController extends ResourceController {
  constructor(){
    super({service: UserService})

    this.userService = UserService

    this.index = this.index.bind(this)
  }

  index(req, res, next){
    return this.userService.index(req.query).then(data => {
      res.json(data)
    }).catch(next)
  }
}

module.exports = UserController