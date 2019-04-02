const { UserModel, ArticleModel, CommentModel } = require('../database/index')
const moment = require('moment')

class StatisticService {
  constructor(){
    this.userModel = UserModel
    this.articleModel = ArticleModel
    this.commentModel = CommentModel
  }

  async addedStatistic(model){
    const start = moment().startOf('month').format("YYYY-MM-DDTHH:mm:ss.SSSZ")
    const end = moment().format("YYYY-MM-DDTHH:mm:ss.SSSZ")

    let data = await model.find({
      createdDate: {
        $gt:  start,
        $lt:  end
      }
    })

    return data
      .map(a => moment(a.createdDate).format('D'))
      .reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
      },{});
  }

  async index () {
    let users = {
      count: await this.userModel.count(),
      statistic: await this.addedStatistic(this.userModel)
    }
    let articles = {
      count: await this.articleModel.count(),
      statistic: await this.addedStatistic(this.articleModel),
      last: await this.articleModel.findOne().sort({createdDate: -1})
    }
    let comments = {
      count: await this.commentModel.count(),
      statistic: await this.addedStatistic(this.commentModel)
    }

    return {
      users,
      articles,
      comments,
    }
  }
}

module.exports = new StatisticService()