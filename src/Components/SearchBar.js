import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
// import BBackButton from './Router';
import Header from "./Header";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  onInputChange = SearchValue => {
    let url = "http://skunkworks.ignitesol.com:8000/books/?search=";
    this.setState({ search: SearchValue });
    //  console.log(search);
    // this.props.onSearchTermChange(search);
  };

  onSubmit = () => {
    console.log(this.state.search);
  };

  _onButtonClick() {
    this.setState({
      showComponent: true
    });
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <TextField
            value={this.state.search}
            onChange={event => this.onInputChange(event.target.value)}
            id="full-width"
            InputLabelProps={{
              shrink: true
            }}
            placeholder="Search a book or author"
            fullWidth
          />
        </div>
        <button type="button" onClick={this.onSubmit}>
          SUBMIT
        </button>

         <div>
        <button onClick={this._onButtonClick}>Button</button>
        {this.state.showComponent ?
           <Header /> :
           null
        }
      </div>
      </div>
    );
  }
}

export default SearchBar;
