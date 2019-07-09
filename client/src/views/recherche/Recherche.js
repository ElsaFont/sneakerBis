import React, { Fragment } from "react";
//import { Link } from "react-router-dom";

import "./Recherche.scss";

class Recherche extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      filteredItems: [],
      visible: 6,
      error: false,
      brands: [],
      show: 11
      //currentItem: false,
      //underlineItem: null
    };

    this.loadMore = this.loadMore.bind(this);
    this.filterItems = this.filterItems.bind(this);
    // this.underlineCurrentItem = this.underlineCurrentItem.bind(this);
  }
  //fonction qui reprend le this.state.visible et au clique sur le bouton ajoute 6 items de plus.
  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 6 };
    });
  }

  // fonction qui au clique filtre les items par marques
  filterItems = brandid => {
    // const copyItems = [...this.state.items];
    // console.log("avant", copyItems);
    // const filteredItemsByBrands = copyItems.filter(
    //   item => item.marque_id1 === idbrand
    // );
    // this.setState(state => {
    //   return { filteredItems: filteredItemsByBrands };
    // });
    //console.log("après", filteredItemsByBrands);
    this.callApi(`/api/product/${brandid}`)
      .then(items => {
        this.setState({ items });
        sessionStorage.clear();
        console.log("je reviens de la database", items);
      })
      .catch(err => console.log(err));
  };

  toggle() {
    this.setState({
      currentItem: !this.state.currentItem
    });
  }

  // underlineCurrentItem() {
  //   this.setState({
  //     underlineItem: "underline"
  //   });
  // }

  // chargera les données des components distants.
  componentDidMount() {
    this.callApi("/api/product")
      .then(items => {
        this.setState({ items });
        sessionStorage.clear();
        //console.log(items);
      })
      .catch(err => console.log(err));

    this.callApi("/api/brand")
      .then(brands => {
        //console.log(items);
        this.setState({ brands });
        sessionStorage.clear();
      })
      .catch(err => console.log(err));
  }

  callApi = async url => {
    const items = await fetch(url);
    const body = await items.json();
    if (items.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="site">
        <div className="recherche">
          <p>DECOUVREZ NOS MODELES</p>
        </div>
        <div className="marques1">
          {this.state.brands.slice(0, this.state.show).map(brand => {
            return (
              <div
                // au clique déclenche la fonction filterItems
                onClick={e => this.filterItems(brand.id_marque)}
                className="nom"
                //id={brand.id_marque}
                // la clé est l'id de la BDD
                key={brand.id}
              >
                {/* affiche les noms des brands, label est le nom dans la BDD */}
                <div>{brand.label}</div>
              </div>
            );
          })}
        </div>
        <div className="marques">
          <Fragment>
            {/* ici on boucle sur les annonces  */}
            {}
            {this.state.items.slice(0, this.state.visible).map(item => {
              return (
                // ici on importe l'id de l'annonce
                <div className="shoes" key={item.id}>
                  <div className="page">
                    <div className="avant">
                      <figure>
                        {/* ici on importe la photo de l'annonce */}
                        <img
                          src={item.photo_1}
                          alt="afficher les sneakers"
                          className="sizePic"
                        />
                      </figure>
                    </div>
                    <div className="arriere">
                      {/* ici ce sont les informations qui vont s'afficher au backface de l'annonce*/}
                      <div>{item.saler_id} </div>
                      <div>{item.marque}</div>
                      <div>{item.modèle}</div>
                      <div>{item.prix} €</div>
                      <div>{item.taille}</div>
                      <img
                        //ici on ajoute le produit au panier
                        src={require("./img/cart.png")}
                        alt="move_to_bag"
                        className="cart"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Fragment>
        </div>
        {/* ici on boucle sur le bouton qui effectue une pagination*/}
        {this.state.visible < this.state.items.length && (
          <button onClick={this.loadMore} type="button" className="plus">
            VOIR PLUS
          </button>
        )}
      </div>
    );
  }
}

export default Recherche;
