import React, { Fragment } from "react";
//import { Link } from "react-router-dom";

import "./Popup.scss";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // initialItems du tuto
      filterItems: [], // items du tuto
      currentItem: {
        text: "",
        key: ""
      }
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch = () => {
    //e.preventDefault();
    this.callApi(`/api/product/`)
      .then(items => {
        this.setState({ items });
        sessionStorage.clear();
        console.log("je suis dans la fonction du pop-up", items);
      })
      .catch(err => console.log(err));
    let searchItem = this.state.items;
    searchItem = searchItem.filter(item => {
      return item.toLowerCase();
    });
    this.setState({
      //todos: searchItem,
      items: this.state.searchItem
    });
    console.log("searchItem =>", searchItem);
  };

  componentWillMount() {
    // this.callApi("/api/product")
    //   .then(items => {
    //     this.setState({ items });
    //     sessionStorage.clear();
    //     console.log(items);
    //   })
    //   .catch(err => console.log(err));
    // this.setState({
    //   items: this.state.filterItems
    // });
  }

  callApi = async url => {
    const items = await fetch(url);
    const body = await items.json();
    if (items.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <Fragment>
        <div className="mask">
          <div className="popup">
            <form className="form">
              {this.state.items.map(it => {
                return (
                  <input
                    className="inputPopUp"
                    onChange={this.updateSearch}
                    data-category={it}
                    key={it}
                    type="text"
                    placeholder="Recherchez un modèle"
                    required
                  />
                );
              })}
              {/* <button type="submit">Rechercher</button> */}
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Popup;
