class BaseService {
  constructor(params){
    this.model = params.model

    this.index = this.index.bind(this)
    this.show = this.show.bind(this)
    this.update = this.update.bind(this)
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
  }

  async _withPaginate(query){
    return await this.model.paginate({}, {sort: {createdDate: -1}, page: query.page})
  }

  async _withoutPaginate(query){
    return await this.model.find(query)
  }

  async index (query) {
    return query.page ? this._withPaginate(query) : this._withoutPaginate(query)
  }

  async show (id) {
    return await this.model.findById(id)
  }

  async update (id, data) {
    return await this.model.findByIdAndUpdate(id, data, {new: true})
  }

  async create (data) {
    let item = new this.model(data)
    return await item.save()
  }

  async remove (id) {
    return await this.model.findByIdAndDelete({_id: id})
  }
}

module.exports = BaseService