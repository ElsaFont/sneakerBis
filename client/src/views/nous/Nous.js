import React, { Component, Fragment } from "react";
//import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

import "./Nous.scss";

class Nous extends Component {
  render() {
    return (
      <Fragment>
        <h1>
          À Propos de <span>SneakerBis</span>
        </h1>
        <div class="page_subtitle"> La marketplace Sneakers française</div>
        <h2>SneakerBis c'est quoi? </h2>
        <p class="large">
          Tout d'abord, SneakerBis est une plateforme d'achat vente dédiée aux
          sneakers en France. Notre ambition est de devenir la place de marché
          la plus sécurisée et la plus simplifiée dans le milieu de la sneakers.
          Ensuite, chaque produit mis en vente sur le site est authentifié pour
          que la qualité et la légitimité soit toujours au rendez-vous. Aussi,
          SneakerBis est une marketplace de sneakers réservée uniquement à la
          France. Enfin, vous retrouverez dans notre catalogue sneakers toutes
          les plus grandes marques. Nike, Jordan, Adidas, Yeezy, New Balance,
          Converse, Puma, Airwalk... A vous de faire votre choix!{" "}
        </p>
        <h3>Qui sommes-nous?</h3>
        <p>
          SneakerBis est une société créée en 2018 spécialisée dans l'achat et
          la vente de sneakers.L'entreprise est immatriculée au registre du
          commerce de Paris sous le numéro 000 000 000 00.
        </p>
        <h3>Comment fonctionne le site?</h3>
        <ul>
          <li>
            <strong>SneakerBis fonctionne comme une place de marché.</strong>{" "}
            Sur notre marketplace, les vendeurs mettent en ligne des sneakers
            authentiques et les acheteurs trouvent les baskets qu'ils
            recherchent dans notre catalogue sneakers .
          </li>
          <li>
            <strong>Achetez en toute confiance.</strong> Toutes les paires de
            baskets vendues sur SneakerBis sont authentiques et neuves. Elles
            sont toutes validées avant leur mise en vente par l'équipe. L'argent
            de la vente est bloqué et libéré une fois le produit reçu par
            l'acheteur.
          </li>
          <li>
            <strong>Achetez avec Intelligence.</strong> SneakerBis vous indique
            la valeur de la Sneakers sur le marché en temps réel. Vous trouverez
            cette information sur chaque fiche produits.
          </li>
        </ul>
        <h3>Quel type de Sneakers vous trouverez sur le site?</h3>
        <p>
          Les sneakers autorisées sur le site doivent être neuves, non portées
          et en condition deadstock. Les factures d'achat et le numéro de série
          sont vivement recommandés pour aider à la validation de la mise en
          vente des chaussures. Vous trouverez les marques Nike, Adidas, New
          Balance, Converse...
        </p>
        <Footer />
      </Fragment>
    );
  }
}

export default Nous;
