import React, { Fragment } from "react";
//import { Link } from "react-router-dom";

import "./Popup.scss";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      redirect: false,
      items: [],
      filter: "",
      message: false,
      todo: []
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.filter = this.filter.bind(this);
  }

  updateSearch(inputValue) {
    //let filter = this.state.filter;
    //console.log(this.state.value);
    this.setState({
      filter: inputValue,
      value: this.state.value + inputValue //.substr(0, 20)
    });
    console.log("je console le this", this.state.value);
  }

  // handleChange(event) {
  //   console.log(this.updateSearch);
  //   //this.state.updateSearch(event.target.value);
  //   //this.setState({ search: event.target.value.substr(0, 20) });
  // }

  filter(e) {
    // if (!this.props.filter) {
    //   return items;
    // }
    // return items.filter(
    //   items =>
    //     items.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1 //>= 0
    // );
    var updatedList = this.state.items;
    updatedList = updatedList.filter(item => {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      todo: updatedList
    });
    if (updatedList === 0) {
      this.setState({
        message: true
      });
    } else {
      this.setState({
        message: false
      });
    }
  }

  componentDidMount() {
    this.callApi("/api/product")
      .then(items => {
        //console.log(items);
        this.setState({ todo: this.state.items });
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
      <Fragment>
        <div className="mask">
          <div className="popup">
            {/* {this.filter(this.state.items).map(item => { */}
            {/* {this.state.todo.map(item => {
              return ( */}
            <form className="form">
              <ul>
                {this.state.todo.map(todo => {
                  return (
                    <li key={Math.floor(Math.random() * 10000) + 1}>{todo}</li>
                  );
                })}
                {this.state.message ? <li>No search results.</li> : ""}
              </ul>
              <input
                className="inputPopUp"
                type="text"
                placeholder="Recherchez un modèle"
                onChange={e => this.updateSearch(e.target.value)}
                //onChange={e => this.updateSearch(this.state.filter)}
                //onChange={this.state.filter}
                //value={this.state.filter}
                //value={item.marque}
                //items={this.state.item}
                //searchText={this.state.filter}
                required
              />
            </form>
            {/* ); })} */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Popup;
