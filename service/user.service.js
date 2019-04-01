const {UserModel} = require('../database/index')
const BaseService = require('./base.service')
const bcrypt      = require('bcryptjs');

class UserService extends BaseService {
  constructor(){
    super({model: UserModel})
    this.userModel = UserModel
    this.articleAuthor = this.articleAuthor.bind(this)
  }

  async articleAuthor(articles_id) {
    return await this.userModel.find({_id: articles_id})
  }

  async create(data){
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(data.password, salt);

    let user = new this.model({...data, password})
    return await user.save()
  }

  async update(id, data){
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(data.password, salt);

    return await this.model.findByIdAndUpdate(id, {...data, password}, {new: true})
  }
}

module.exports = UserService