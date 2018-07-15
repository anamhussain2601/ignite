import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Header from "./Header";
import Button from '@material-ui/core/Button';
import BookList from './BookList';
import color from "../../node_modules/@material-ui/core/colors/red";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      showComponent: false,
      searchedBooks:[],
    };
  }

  onInputChange = SearchValue => {
    this.setState({ search: SearchValue });
  };

  onSubmit = () => {
    
    let uri = "http://skunkworks.ignitesol.com:8000/books/?search=";
    let arr = this.state.search.split(" ");

    let finalURL =uri+this.props.selectedGenre+" "+arr[0]+" "+arr[1];
   finalURL = finalURL.split(' ').join('%20');
    console.log(finalURL,"finalURL");
    //finalURL = encodeURI(finalURL);
    //console.log(finalURL);
    fetch(finalURL)
    .then(
      (response) =>{
        console.log("response",response);
      return response.json();
    }
)
  .then(
    (myJson) =>{
    console.log("myJson",myJson);
      //this.setState({searchedBooks:myJson.results})
      this.props.setBookState(myJson.results);
    }
);
  };

  render() {
    console.log(this.props.from);
    return (
       window.innerWidth > 400 ?

      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <div className="search-bar" >
          <TextField
        style={{width: "400%"}}
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
        <Button variant="outlined" onClick={this.onSubmit}>
        Search
      </Button>
      {/* <BookList books={this.state.searchedBooks} from={this.state.from}/> */}
      </div>
      :<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      <div className="search-bar" >
        <TextField
      style={{width: "150%"}}
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
      <Button  style ={{backgroundColor: "#ECF0F4" }}variant="outlined" onClick={this.onSubmit}>
      Search
    </Button>
    {/* <BookList books={this.state.searchedBooks} from={this.state.from}/> */}
    </div>

    );
  }
}

export default SearchBar;
