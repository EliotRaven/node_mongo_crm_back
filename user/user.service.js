const { UserModel } = require('../database/index')
const BaseService = require('../service/base.service')
const bcrypt      = require('bcryptjs');

class UserService extends BaseService {
  constructor(){
    super({model: UserModel})
  }
  async create(data){
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(data.password, salt);

    let user = new this.model({...data, password})
    return await user.save()
  }

  async update(id, data){
    if(!data.password) return await this.model.findByIdAndUpdate(id, data, {new: true})

    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(data.password, salt);

    return await this.model.findByIdAndUpdate(id, {...data, password}, {new: true})
  }
}

module.exports = new UserService()