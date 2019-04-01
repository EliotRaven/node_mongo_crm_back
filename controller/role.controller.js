const {RoleService} = require('../service/index')
const ResourceController = require('./resource.controller')

class RoleController extends ResourceController {
  constructor(){
    super({service: RoleService})
  }
}

module.exports = RoleController