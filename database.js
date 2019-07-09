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

/////////////////////// PRODUCTS ///////////////////////////////

//RECUPERE LA MARQUE ET LE MODELE DE LA TABLE PRODUIT
// const getProduct = clbk => {
//   connection.query(
//     `SELECT id, modèle, année, prix, état, quantité, photo_1, photo_2, photo_3, taille, saler_id, label, logo FROM produit INNER JOIN marque ON produit.marque_id1 = marque.id_marque WHERE vendu = 0`,
//     function(error, results, fields) {
//       //console.log(results);
//       if (error) return clbk(error, null);
//       return clbk(null, results);
//     }
//   );
// };

// FONCTION QUI APPELLE LES PRODUITS GETPRODUCTS ET GETPRODUCTSBYBRAND DANS SERVER
const getProducts = (clbk, id) => {
  let product;
  if (id) {
    product = `SELECT id, modèle, année, prix, état, quantité, photo_1, photo_2, photo_3, taille, saler_id, label, logo FROM produit INNER JOIN marque ON produit.marque_id1 = marque.id_marque WHERE vendu = 0 AND marque_id1 = ?`;
  } else {
    product = `SELECT id, modèle, année, prix, état, quantité, photo_1, photo_2, photo_3, taille, saler_id, label, logo FROM produit INNER JOIN marque ON produit.marque_id1 = marque.id_marque WHERE vendu = 0`;
  }
  connection.query(product, [id], function(error, results, fields) {
    console.log("result from database", results);
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

/////////////////////// USERS ///////////////////////////////

// RECUPERE TOUTES LES INFORMATIONS RELATIVES AUX UTILISATEURS
// const connectUser = clbk => {
//   connection.query(`SELECT * FROM client`, function(error, results, fields) {
//     //console.log(results);
//     if (error) return clbk(error, null);
//     return clbk(null, results);
//   });
// };

// RECUPERE LES INFORMATIONS RELATIVES AU LOGIN
function UserConnexion(clbk, input) {
  const email = input.mail;
  const password = input.password;
  // console.log(email, password);
  q = "SELECT * FROM client WHERE mail = ?";

  //on vérifie si l'adresse mail existe
  connection.query(q, [email], function(err, data, fields) {
    // console.log(this.sql);
    // console.log("data ==>", data);
    if (err) return clbk({ err: "unknown" }, null);
    else {
      //si il y a une data correspondante, on vérifie la concordance du mot de passe
      if (data.length > 0) {
        //si le mot de passe est correct --> connexion
        //console.log("data ==>", data);
        // if (data[0].mot_de_passe === password) {
        return clbk(null, data);
        // }
        //sinon --> mot de passe incorrect
        if (err) return clbk({ error: "unknow error" }, null);
      }

      //sinon on ne renvoie rien
      return clbk({ error: "adresse email introuvable" }, null);
    }
  });
}

function UserRegister(body, clbk) {
  console.log("je suis ici", body);

  const name = body.name;
  const surname = body.surname;
  const mail = body.mail;
  const password = body.password;

  let payload = [name, surname, mail, password];

  console.log(name, surname, mail, password);

  checkUser = "SELECT * FROM client WHERE mail = ?";
  insertUser =
    "INSERT into client (nom, prénom, mail, mot_de_passe) VALUES (?, ?, ?, ?)";

  //on vérifie si l'adresse mail existe
  connection.query(checkUser, [mail], function(err, data, fields) {
    //console.log(this.sql);
    //console.log("data ==>", data);
    if (err) return clbk({ err: "unknown" }, null);
    else {
      //si il y a une data correspondante, on vérifie la concordance du mot de passe
      if (data.length === 0) {
        console.log("ok on va créer le user");
        connection.query(insertUser, payload, (err, results) => {
          if (err) return clbk({ err: "unknown" }, null);
          else return clbk(null, results);
        });
      } else {
        return clbk(
          { message: "cet email est déjà associé à un compte" },
          null
        );
      }
    }
  });
}

module.exports = {
  getProducts,
  getBrand,
  UserConnexion,
  UserRegister,
  end
};
