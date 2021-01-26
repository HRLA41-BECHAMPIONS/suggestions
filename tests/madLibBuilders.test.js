const seed = require('../database/seedingScript/madLibBuilders.js');

const { rndmGen, currentProduct, currentProducts } = seed.rndmGen;
const suggestion = seed.relatedSuggestion;
const suggestions = seed.relatedSuggestions;

// check the keys' names in suggestion, suggestions, and currentProduct;
// what are your inputs and outputs ?
/* Seeding Script */
test('suggestion object is length 2', () => {
  expect(Object.keys(suggestion()).length).toEqual(2);
});
test('suggestion list is length 100', () => {
  expect(suggestions().length).toEqual(100);
});
test('suggestions list is an array of objects', () => {
  expect(typeof suggestions()[0]).toBe('object');
});
test('currentProduct object is length 2', () => {
  expect(Object.keys(currentProduct(rndmGen(100), suggestions())).length).toEqual(2);
});
test('currentProduct object\'s related Items has 14 entries', () => {
  expect(currentProduct(rndmGen(100), suggestions()).relatedItems.length).toEqual(14);
});
test('currentProduct\'s related Items all come from the corresponding suggestions', () => {
  const list = suggestions();
  const product = currentProduct(rndmGen(100), list);
  for (let i = 0; i < product.relatedItems.length; i += 1) {
    expect(list.includes(product.relatedItems[i])).toBe(true);
  }
});
test('currentProducts return 100 suggestions, and 100 currentProducts', () => {
  expect(Object.keys(
    currentProducts(currentProduct, suggestions)
      .currentProducts
  )
    .length)
    .toEqual(100);
});

/* dbHelpers */
