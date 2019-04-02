const RoleService        = require('./role.service')
const { BaseController } = require('../controller')

class RoleController extends BaseController {
  constructor(){
    super({service: RoleService})
  }
}

module.exports = new RoleController()