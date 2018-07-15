import React, { Component } from 'react';
import SearchBar from './SearchBar';
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {shortName} from '../Utils/utils';
import '../App.css';
import RenderAuthor from './RenderAuthor';
import RenderImage from './RenderImage';
import AvailableFormat from './AvailableFormat';
 
class BookList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showAvailFormat:false,
        }
      }
    render(){
        return this.props.books.length===0 ? <div style={{marginTop:"25%", marginLeft:"45%"}}>Loading...</div>:
        <div>
            <SearchBar setBookState={this.props.setBookState} selectedGenre={this.props.selectedGenre}/>
            
                <InfiniteScroll 
                    dataLength={this.props.books.length} 
                    next={this.props.fetchMoreData} 
                    hasMore={true} 
                    loader={<h4>Loading...</h4>}>
                    {
                        this.props.books.map((book,index)=>{
                        return <div key={index} className="books-container">
                                <Card  onClick={this.onBookClick}>
                                    <RenderImage/>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {book.title.length > 20 ? book.title.split(' ').slice(0,3).join(' ')+'...':book.title}
                                        </Typography>
                                        <RenderAuthor authors={book.authors}/>
                                        <AvailableFormat format={book.formats}/>
                                    </CardContent>
                                </Card>
                            </div>
                        })
                    }
                </InfiniteScroll>
                
        </div>
    };
};

export default BookList;