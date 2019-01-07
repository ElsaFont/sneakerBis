const express = require("express");
const database = require("./database");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DANS RECHERCHE ON AFFICHERA LES PRODUITS STOCKES
app.get(`/api/product`, (req, res) => {
  database.getProduct(function(err, dataset) {
    //console.log(dataset);
    res.send(dataset);
  });
});

//DANS RECHERCHE ON AFFICHERA LES MARQUES ET ON FILTRERA AU CLIQUE SUR LE NOM
// app.get(`/api/brand/:currentBrandId`, function(req, res) {
//   const id_brand = req.params.currentBrandId;
//   database.getBrand(id_brand, function(err, dataset) {
//     res.send(dataset);
//   });
// });
app.get(`/api/brand`, function(req, res) {
  //const id_brand = req.params.currentBrandId;
  database.getBrand(function(err, dataset) {
    res.send(dataset);
  });
});

// DANS CONNEXION POUR QUE L'UTILISATEUR PUISSE SE CONNECTER
app.get(`/api/connexion`, function(req, res) {
  database.connectUser(function(err, dataset) {
    res.send(dataset);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
