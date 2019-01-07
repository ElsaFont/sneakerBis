const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sneakerBis",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function(err) {});

const end = () => {
  connection.end();
};

//RECUPERE LA MARQUE ET LE MODELE DE LA TABLE PRODUIT
const getProduct = clbk => {
  connection.query(`SELECT * FROM produit`, function(error, results, fields) {
    //console.log(results);
    if (error) return clbk(error, null);
    return clbk(null, results);
  });
};

//RECUPERE LES DIFFERENTES MARQUES DE SNEAKERS
const getBrand = clbk => {
  connection.query(`SELECT * FROM marque`, function(error, results, fields) {
    //console.log(results);
    if (error) return clbk(error, null);
    return clbk(null, results);
  });
};

// RECUPERE TOUTES LES INFORMATIONS RELATIVES AUX UTILISATEURS
const connectUser = clbk => {
  connection.query(`SELECT * FROM client`, function(error, results, fields) {
    //console.log(results);
    if (error) return clbk(error, null);
    return clbk(null, results);
  });
};

module.exports = {
  getProduct,
  getBrand,
  connectUser,
  end
};
