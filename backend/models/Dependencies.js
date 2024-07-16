const mongoose = require('mongoose');

const DependenciesSchema = new mongoose.Schema({
  dependencies: { type: String, required: true }
});

module.exports = mongoose.model('Dependencies', DependenciesSchema);