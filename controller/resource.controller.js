class ResourceController {
  constructor(params){
    this.service = params.service

    this.index = this.index.bind(this)
    this.show = this.show.bind(this)
    this.update = this.update.bind(this)
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
  }

  index (req, res, next) {
    return this.service.index(req.query, req.headers).then(data => {
      res.json(data)
    }).catch(next)
  }

  show (req, res, next) {
    return this.service.show(req.params.id).then(data => {
      res.json(data)
    }).catch(next)
  }

  update (req, res, next) {
    return this.service.update(req.params.id, req.body).then(data => {
      res.json(data)
    }).catch(next)
  }

  create (req, res, next) {
    return this.service.create(req.body).then(data => {
      res.json(data)
    }).catch(next)
  }

  remove (req, res, next) {
    return this.service.remove(req.params.id).then(data => {
      res.json(data)
    }).catch(next)
  }
}

module.exports = ResourceController