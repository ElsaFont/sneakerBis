const express = require("express");
const database = require("./database");
const bodyParser = require("body-parser");
var cors = require("cors");
var bcrypt = require("bcryptjs");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get(`/api/product`, getProducts);
app.get(`/api/product/:id`, getProductsByBrand);
app.get(`/api/brand`, getBrand);
app.post(`/api/connexion`, connexion);
app.post("/api/register", inscription);

/////////////////////// PRODUCTS ///////////////////////////////

//DANS RECHERCHE ON AFFICHERA LES PRODUITS STOCKES
function getProducts(req, res) {
  database.getProducts(function(err, dataset) {
    //console.log(dataset);
    res.send(dataset);
  }, null);
}

function getProductsByBrand(req, res) {
  const id = req.params.id;
  // console.log("id de la marque cliqué", id);
  database.getProducts(function(err, dataset) {
    // console.log(dataset);
    res.send(dataset);
  }, id);
}

//DANS RECHERCHE ON AFFICHERA LES MARQUES ET ON FILTRERA AU CLIQUE SUR LE NOM
// app.get(`/api/brand/:currentBrandId`, function(req, res) {
//   const id_brand = req.params.currentBrandId;
//   database.getBrand(id_brand, function(err, dataset) {
//     res.send(dataset);
//   });
// });
function getBrand(req, res) {
  //const id_brand = req.params.currentBrandId;
  database.getBrand(function(err, dataset) {
    res.send(dataset);
  });
}

/////////////////////// USERS ///////////////////////////////

// DANS CONNEXION POUR QUE L'UTILISATEUR PUISSE SE CONNECTER
// app.get(`/api/connexion`, function(req, res) {
//   database.connectUser(function(err, dataset) {
//     res.send(dataset);
//   });
// });

//CONNEXION : VERIF ADRESSE MAIL ET MOT DE PASSE
function connexion(req, res) {
  database.UserConnexion((err, dataset) => {
    console.log(dataset);
    if (err) {
      return res.status(501).send(err);
    } else if (!dataset)
      return res.status(401).send({ message: "Cet email n'existe pas" });

    bcrypt
      .compare(req.body.password, dataset[0].mot_de_passe)
      .then(function(match) {
        // si le password est invalide, retourner une erreur au client
        if (!match)
          return res.status(404).send({ message: "mot de passe incorrect" });
      });
    return res.status(200).send(dataset);
  }, req.body);
  //console.log(userConnexion);
}

function inscription(req, res) {
  const { name, surname, mail, password } = req.body; //destructuration
  const newUser = { name, surname, mail };
  console.log("newUser", newUser);
  bcrypt
    .hash(password, 10)
    .then(hash => {
      newUser.password = hash;
      // console.log("newUser dans le hash", newUser);

      database.UserRegister(newUser, (err, dataset) => {
        if (err) {
          console.log(err);
          return res.status(501).send(err);
        }
        return res.status(200).send(dataset);
      });
    })
    .catch(err => {
      return res.status(500).send(err);
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
