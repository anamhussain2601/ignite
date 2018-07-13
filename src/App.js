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
      nextPage:''
    }
  }

  fetchMoreData = () => {
    console.log("this fetch more is called");
    fetch(this.state.nextPage)
      .then((response)=> {
        return response.json();
      })
      .then((myJson)=> {
        console.log("myJson",myJson);
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
      let url = baseURL+genre.toLowerCase();
      fetch(url)
      .then((response)=> {
        return response.json();
      })
      .then((myJson)=> {
        console.log(myJson , "obj");
        let {results,next}=myJson;
        this.setState({
          books:results,
          nextPage:next
        })
      });
  }
  render() {
    return (
      <div className="container">
        {this.state.selectedGenre ?<BookList books={this.state.books} fetchMoreData={this.fetchMoreData}/> :<Header onGenreClick={this.onGenreClick}/>}
      </div>
    );
  }
}

export default App;
