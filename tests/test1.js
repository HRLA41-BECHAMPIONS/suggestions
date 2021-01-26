const { readRelatedSuggestions } = require('../database/dbHelpers.js');

readRelatedSuggestions('Core silk Frock')
  .then((response)=> {
    console.log(response);
  });