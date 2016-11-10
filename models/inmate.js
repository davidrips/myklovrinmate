var mongoose = require('mongoose');

var inmateSchema = mongoose.Schema({
  authId: String,
  firstName: String,
  lastName: String,
  email: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  created: Date,
});

var inmate = mongoose.model('inmate', inmateSchema);
module.exports = inmate;