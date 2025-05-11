// Exemple de liste de produits en dur
const products = [
  { id: 1, name: "pain", price: 1.2 },
  { id: 2, name: "beurre", price: 2.5 },
  { id: 3, name: "lait", price: 1.0 },
  { id: 4, name: "fromage", price: 3.0 },
  { id: 5, name: "jambon", price: 4.0 },
  { id: 6, name: "poulet", price: 5.0 },
  { id: 7, name: "riz", price: 1.5 },
  { id: 8, name: "pâtes", price: 1.8 },
  { id: 9, name: "tomates", price: 0.8 },
  { id: 10, name: "salade", price: 1.2 },
];
// Fonction appelée par la route
const getProducts = (req, res) => {
    res.json(products);
};

module.exports = { getProducts};
