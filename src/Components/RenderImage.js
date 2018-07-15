import React from 'react';
import bookImage from './noprev.jpg';

const RenderImage =()=>{
    return window.innerWidth > 400 ?
     <div style={{margin:'10px'}}>
                {
                   <img src={bookImage} width="60%" height="300" alt="My Pic"/>
                }
    </div>:
    <div style={{display: 'flex', justifyContent: 'space-around' ,}}>
    {
       <img src={bookImage} width="90%" height="200" alt="My Pic"/>
    }
</div>
}

export default RenderImage;