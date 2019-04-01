const mongoose = require('mongoose');
const Schema   = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({
  token: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

schema.plugin(mongoosePaginate);
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('UserSession', schema);