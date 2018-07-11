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
import bookImage from './noprev.jpg';
import '../App.css';
 
class Header extends Component{
    render(){
        return this.props.books.length===0 ? <div style={{marginTop:"25%", marginLeft:"45%"}}>Loading...</div>:
        <div>
            <SearchBar/>
            
                <InfiniteScroll 
                    dataLength={this.props.books.length} 
                    next={this.props.fetchMoreData} 
                    hasMore={true} 
                    loader={<h4>Loading...</h4>}>
                    {
                        this.props.books.map((book,index)=>{
                        return <div key={index} className="books-container">
                                <Card>
                                     <RenderImage/>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {book.title.length > 20 ? book.title.split(' ').slice(0,3).join(' ')+'...':book.title}
                                        </Typography>
                                        {
                                            book.authors.map((author,index)=>{
                                                return <Typography key={index} component="p">{author.name}</Typography>
                                            })
                                        }
                                    </CardContent>
                                </Card>
                            </div>
                        })
                    }
                </InfiniteScroll>
                
        </div>
    };
}

const RenderImage =()=>{
    console.log(window.innerWidth)
    return window.innerWidth > 350 ?
     <div style={{margin:'10px'}}>
                {
                   <img src={bookImage} width="20%" height="300" alt="My Pic"/>
                }
    </div>:
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
    {
       <img src={bookImage} width="30%" height="300" alt="My Pic"/>
    }
</div>
}

export default Header;