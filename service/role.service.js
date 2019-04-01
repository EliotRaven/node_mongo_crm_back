const {RoleModel} = require('../database/index')
const BaseService = require('./base.service')

class RoleService extends BaseService {
  constructor(){
    super({model: RoleModel})

    this.role = RoleModel
  }

  async create (data) {
    let lastIndex = await this.role.findOne().sort({id: -1})
    let role = new this.role({...data, id: lastIndex.id+1})
    return await role.save()
  }
}

module.exports = RoleService