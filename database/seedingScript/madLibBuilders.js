const mL = require('./madLibContents.json');

const { attribute, materials, nouns } = mL;
// const { materials } = mL;
// const { nouns } = mL;

const urls = require('./urlFetchers.js');

const randomUrl = () => (urls[Math.floor(Math.random() * urls.length)]);

// setup the connection with the db
// import the db connection & the schemas into the seeding script
// run the insertion into the db;

const rndmGen = (length) => Math.floor(Math.random() * length);

const relatedSuggestion = () => {
  const product = {};
  product.title = `${attribute[Math.floor(Math.random() * Math.floor(attribute.length))]} ${materials[Math.floor(Math.random(materials.length) * Math.floor(4))]} ${nouns[Math.floor(Math.random() * Math.floor(nouns.length))]}`;
  product.imgurl = randomUrl();
  return product;
};

const relatedSuggestions = () => {
  const productsArr = [];
  for (let i = 0; i < 100; i += 1) {
    productsArr.push(relatedSuggestion());
  }
  return productsArr;
};

const currentProduct = (entryIndex, entryList) => {
  /*
    retourne un objet qui contient:
    le nom du produit conrrespondant à l'entryIndex
    un array de strings - ces strings sont les noms de 14 entrées tirées au hasard dans la liste
  */

  const currentProduct = entryList[entryIndex].title;
  const relatedItems = [];
  const alreadyUsedIndexes = [];
  for (let i = 0; i < 14; i += 1) {
    let rndmIndex = rndmGen(100);
    while (alreadyUsedIndexes.includes(rndmIndex)) {
      rndmIndex = rndmGen(100);
    }
    alreadyUsedIndexes.push(rndmIndex);
    relatedItems.push(entryList[rndmIndex].title);
  }
  return { currentProduct, relatedItems };
};

const currentProducts = (currentProduct, suggestionsBuilder) => {
  // crée un tableau contenant 100 produits,
  // retourn les 100 produits, et les

  const relatedSuggestions = suggestionsBuilder();
  const currentProducts = relatedSuggestions
    .map((item, i) => currentProduct(i, relatedSuggestions));
  return { currentProducts, relatedSuggestions };
};

// make the insertion with these items
// db.create(schemas.suggestions);
// db.create(schemas.alsoBought);

module.exports = {
  rndmGen,
  relatedSuggestion,
  relatedSuggestions,
  currentProduct,
  currentProducts,
};

/*
une fois la table de suggestions implémentée
récupère tous les _ids de chaque relatedSuggestions
crée le deuxième script:
  pour chaque entrée de relatedSuggestions,
    choisit 14 autres entrés dans la même table,
    et rentre-les dans un array
*/
