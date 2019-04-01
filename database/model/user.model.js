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
  image: { type: String, default: path.resolve(__dirname) + '/public/image/User_icon_BLACK-01.png' },
  createdDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

schema.plugin(mongoosePaginate);
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);