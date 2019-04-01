const mongoose = require('mongoose');
const Schema   = mongoose.Schema
const path     = require('path');
const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
  role_id: { type: String },
  image: { type: String, default: 'https://openclipart.org/download/247324/abstract-user-flat-1.svg' },
  createdDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

schema.plugin(mongoosePaginate);
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);