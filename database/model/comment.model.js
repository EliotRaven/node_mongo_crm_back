const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({
  author_id: { type: String, required: true },
  article_id: { type: String, required: true },
  message: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

schema.plugin(mongoosePaginate);
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Comment', schema);