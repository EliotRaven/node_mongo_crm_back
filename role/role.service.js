const { RoleModel } = require('../database/index')
const { BaseService } = require('../service')

class RoleService extends BaseService {
  constructor(){
    super({model: RoleModel})
  }

  async create (data) {
    let lastIndex = await this.model.findOne().sort({id: -1})
    let role = new this.model({...data, id: !lastIndex ? 1 : lastIndex.id+1})
    return await role.save()
  }
}

module.exports = new RoleService()