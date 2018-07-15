import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BookList from './Components/BookList'

const baseURL ='http://skunkworks.ignitesol.com:8000/books/?search='; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre:"",
      searchedTerm:"",
      books:[],
      nextPage:'',
      from:''
    }
  }

  fetchMoreData = () => {
    console.log("this fetch more is called");
    fetch(this.state.nextPage)
      .then((response)=> {
        return response.json();
      })
      .then((myJson)=> {
        let {results,next}=myJson;
        setTimeout(() => {
          this.setState({
            books: this.state.books.concat(results),
            nextPage:next
          });
        }, 2000);
      });
  };
  
  onGenreClick =(genre)=>{
      this.setState({selectedGenre:genre.toLowerCase()});
      let url = baseURL+genre.toLowerCase()+"&&mime_type=image%2Fjpeg";
      fetch(url)
      .then((response)=> {
        return response.json();
      })
      .then((myJson)=> {
        console.log(myJson , "obj");
        let {results,next}=myJson;
        this.setState({
          nextPage:next,
          from:'app'
        });
        this.setBookState(results);

      });
  }
  render() {
    return (
      <div className="container">
        {this.state.selectedGenre ?<BookList books={this.state.books} fetchMoreData={this.fetchMoreData} from={this.state.from} setBookState={this.setBookState} selectedGenre={this.state.selectedGenre}/> :<Header onGenreClick={this.onGenreClick}/>}
      </div>
    );
  }


  setBookState =(books)=>{
    this.setState({books:books})
  };
  
}

export default App;
