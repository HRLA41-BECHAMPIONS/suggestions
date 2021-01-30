const { RelatedSuggestions, CurrentProducts } = require('../dbIndex.js');
const mongoose = require('mongoose');
const helpers = require('./madLibBuilders.js');

const currentProductsFn = helpers.currentProducts;
const relatedSuggestionsFn = helpers.relatedSuggestions;
const currentProductFn = helpers.currentProduct;

/* process:
  Since we have two tables, the currentProducts function will output an object with two arrays:
  the 100 currentProducts to be pushed in the corresponding table
  the 100 relatedSuggestions to be pushed in the corresponding table
*/
const seeder = () => {
  const lists = currentProductsFn(currentProductFn, relatedSuggestionsFn);
  const { currentProducts, relatedSuggestions } = lists;
  return RelatedSuggestions.create(relatedSuggestions)
    .then((response) => CurrentProducts.create(currentProducts))
    .then((response) => {
      // db.connections.disconnect();
      mongoose.disconnect();
    })
    .catch((err) => console.log(err));
};
seeder();
