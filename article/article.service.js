const { ArticleModel, UserModel } = require('../database/index')
const { BaseService } = require('../service')

class ArticleService extends BaseService {
  constructor(){
    super({model: ArticleModel})
    this.article = ArticleModel
    this.user = UserModel
    this.articleWithAuthors = this.articleWithAuthors.bind(this)
  }

  async articleWithAuthors(page){
    let articles = await this.article.paginate({}, {sort: {createdDate: -1}, page})
    let author_ids = [ ...new Set(articles.docs.map(a => a.author_id)) ]
    let authors = await this.user.find({_id: author_ids})
    let docs = articles.docs.map(a => {
      a.author = authors.find(u => u.id === a.author_id)
      return a
    })
    return Promise.resolve({...articles, docs})
  }
}

module.exports = new ArticleService()