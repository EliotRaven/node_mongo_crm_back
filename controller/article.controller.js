const {ArticleService} = require('../service/index')
const ResourceController = require('./resource.controller')

class ArticleController extends ResourceController {
  constructor(){
    super({service: ArticleService})

    this.articleService = ArticleService

    this.articleWithAuthors = this.articleWithAuthors.bind(this)
  }

  articleWithAuthors(req, res, next){
    return this.articleService.articleWithAuthors(req.query).then(data => {
      res.json(data)
    }).catch(next)
  }

}

module.exports = ArticleController