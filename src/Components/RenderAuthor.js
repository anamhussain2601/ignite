import React from 'react';
import Typography from '@material-ui/core/Typography';

const RenderAuthor =({authors})=>{
    let a ="anam";
    return authors.map((author,index)=>{
            return <Typography key={index} component="p">{author.name}</Typography>
    })
   
}

export default RenderAuthor;

