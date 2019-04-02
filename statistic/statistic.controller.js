const StatisticService = require('./statistic.service')
const { BaseController } = require('../controller')

class StatisticController extends BaseController {
  constructor(){
    super({service: StatisticService})
  }
}

module.exports = new StatisticController()