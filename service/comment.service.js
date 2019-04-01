const {CommentModel} = require('../database/index')
const BaseService = require('./base.service')

class CommentService extends BaseService {
  constructor(){
    super({model: CommentModel})

    this.commentModel = CommentModel
    this.articlesComment = this.articlesComment.bind(this)
  }

  async articlesComment(id) {
    return await this.commentModel.find({article_id: id})
  }
}

module.exports = CommentService