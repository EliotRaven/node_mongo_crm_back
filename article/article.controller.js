const ArticleService     = require('./article.service')
const {BaseController} = require('../controller')

class ArticleController extends BaseController {
  constructor(){
    super({service: ArticleService})

    this.service = ArticleService

    this.articleWithAuthors = this.articleWithAuthors.bind(this)
  }

  articleWithAuthors(req, res, next){
    return this.service.articleWithAuthors(req.query).then(data => {
      res.json(data)
    }).catch(next)
  }

}

module.exports = new ArticleController()