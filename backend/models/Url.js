const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  url_link: { type: String, required: true },
  url_type: { type: String, required: true }
});

module.exports = mongoose.model('Url', UrlSchema);