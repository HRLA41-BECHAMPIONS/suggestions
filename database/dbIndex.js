const mongoose = require('mongoose');
const schema = require('./seedingScript/schemas.js');

mongoose.Promise = global.Promise;
const connections = mongoose.connect('mongodb://localhost:27017/suggestions');

const relatedSuggestions = mongoose.Schema(schema.relatedSuggestions);
const currentProducts = mongoose.Schema(schema.currentProducts);

const RelatedSuggestions = mongoose.model('suggestions', relatedSuggestions);
const CurrentProducts = mongoose.model('current', currentProducts);

module.exports = {
  connections,
  CurrentProducts,
  RelatedSuggestions,
};
