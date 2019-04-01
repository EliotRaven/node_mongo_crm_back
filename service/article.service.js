const {ArticleModel} = require('../database/index')
const BaseService = require('./base.service')
const UserService = require('./user.service')

class ArticleService extends BaseService {
  constructor(){
    super({model: ArticleModel})

    this.userService = new UserService()

    this.articleWithAuthors = this.articleWithAuthors.bind(this)
  }

  async articleWithAuthors(page){
    let articles = await ArticleModel.paginate({}, {sort: {createdDate: -1}, page})
    let articles_id = [ ...new Set(articles.docs.map(a => a.author_id)) ]
    let authors = await this.userService.articleAuthor(articles_id)
    let docs = articles.docs.map(a => {
      a.author = authors.find(u => u.id === a.author_id)
      return a
    })
    return Promise.resolve({...articles, docs})
  }
}

module.exports = ArticleService