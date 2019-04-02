const { CommentModel } = require('../database/index')
const { BaseService } = require('../service')

class CommentService extends BaseService {
  constructor(){
    super({model: CommentModel})
  }
}

module.exports = new CommentService()