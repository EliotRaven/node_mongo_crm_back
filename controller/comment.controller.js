const {CommentService} = require('../service/index')
const ResourceController = require('./resource.controller')

class CommentController extends ResourceController {
  constructor(){
    super({service: CommentService})
  }

  articlesComment(req, res, next) {
    return CommentService.articlesComment(req.params.id)
      .then(data => res.json(data))
      .catch(next)
  }
}

module.exports = CommentController