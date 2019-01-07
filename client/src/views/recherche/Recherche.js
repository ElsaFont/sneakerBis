import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Recherche.scss";

class Recherche extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visible: 6,
      error: false,
      brands: [],
      show: 11
    };

    this.loadMore = this.loadMore.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }
  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 6 };
    });
  }

  showBrands() {
    this.setState(prev => {
      return { show: prev.show + 8 };
    });
  }

  filterItems = idbrand => {
    this.setState(state => {
      // return console.log("=>", idbrand, state);
      const x = state.items.filter(item => {
        return item.marque_id1 === idbrand;
      });
      console.log(x);
    });
  };

  // transformResults = campagnes => {
  //   if (!campagnes || campagnes.length === 0) return null;
  //   const chapterWithQuestions = {};
  //   campagnes.forEach(function(e) {
  //     if (!chapterWithQuestions[e.chapitre_q]) {
  //       chapterWithQuestions[e.chapitre_q] = [e];
  //     } else {
  //       chapterWithQuestions[e.chapitre_q].push(e);
  //     }
  //   });
  //   return chapterWithQuestions;
  // };

  componentDidMount() {
    this.callApi("/api/product")
      .then(items => {
        //console.log(items);
        this.setState({ items });
        sessionStorage.clear();
      })
      .catch(err => console.log(err));

    //ON AFFICHE LE NOM DES MARQUES POUR LE FILTRE
    // sessionStorage.setItem("id_brand");
    // const currentBrandId = sessionStorage.getItem("id_brand");
    // this.callApi(`/api/brand/${currentBrandId}`)
    //   .then(response => {
    //     //console.log(response[0].id_brand);
    //     sessionStorage
    //       .set("currentBrandId", response[0].id_brand)
    //       .then(response => response.json())
    //       .then(this.onLoad);
    //   })
    //   .catch(err => console.log(err));
    this.callApi("/api/brand")
      .then(brands => {
        //console.log(items);
        this.setState({ brands });
        sessionStorage.clear();
      })
      .catch(err => console.log(err));
  }

  callApi = async url => {
    // const items = await fetch("/api/product");
    const items = await fetch(url);
    // const brands = await fetch(`brand/:id_brand`);
    const brands = await fetch(`url`);
    const body = await items.json();
    // const labelBrands = await brands.json();
    if (items.status !== 200) throw Error(body.message);
    return body;
    // if (brands.status !== 200) throw Error(labelBrands.message);
    // return labelBrands;
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
                onClick={e => this.filterItems(brand.id)}
                className="nom"
                key={brand.id}
              >
                <div>{brand.label}</div>
              </div>
            );
          })}
        </div>
        <div className="marques">
          <Fragment>
            {this.state.items.slice(0, this.state.visible).map(item => {
              return (
                <div className="shoes" key={item.id}>
                  <div className="page">
                    <div className="avant">
                      <figure>
                        <img
                          src={item.photo_1}
                          alt="afficher les sneakers"
                          className="sizePic"
                        />
                      </figure>
                    </div>
                    <div className="arriere">
                      <div>{item.saler_id} </div>
                      <div>{item.marque}</div>
                      <div>{item.modèle}</div>
                      <div>{item.prix} €</div>
                      <div>{item.taille}</div>
                      <img
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
