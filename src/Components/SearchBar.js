import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component{
    render(){
        return(
        <div className="search-bar">
           <TextField
            id="full-width"
            InputLabelProps={{
                shrink: true,
            }}
            placeholder="Search a book or author"
            fullWidth
            />
        </div>);
    };
}

export default SearchBar;