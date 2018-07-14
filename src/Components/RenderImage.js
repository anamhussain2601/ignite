import React from 'react';
import bookImage from './noprev.jpg';

const RenderImage =()=>{
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

export default RenderImage;