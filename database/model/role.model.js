const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({
  id: {type: Number, required: true, unique: true},
  name: { type: String, required: true, unique: true },
  createdDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

schema.plugin(mongoosePaginate);
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Role', schema);