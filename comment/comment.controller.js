const CommentService     = require('./comment.service')
const { BaseController } = require('../controller')

class CommentController extends BaseController {
  constructor(){
    super({service: CommentService})
  }

  articlesComment(req, res, next) {
    return this.service.articlesComment(req.params.id)
      .then(data => res.json(data))
      .catch(next)
  }
}

module.exports = new CommentController()