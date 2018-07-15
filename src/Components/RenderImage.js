import React from 'react';
import bookImage from './noprev.jpg';

const RenderImage =({book})=>{
    console.log(book.formats['image/jpeg']);
    return window.innerWidth > 400 ?
     <div style={{margin:'10px'}}>
                {
                   <div className="image-thumbnail2" style={{
                       backgroundImage: `url(${book.formats['image/jpeg']})`,
                       backgroundRepeat:"no-repeat",
                       width:"60%" ,
                       height:"300px"
                   }}>
                    </div>
                }
    </div>:
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
    {
       <div className="image-thumbnail3" style={{
        backgroundImage: `url(${book.formats['image/jpeg']})`,
        width:"90%", 
        height:"200px",
        backgroundRepeat:"no-repeat",
    }}></div>
    }
</div>
}

export default RenderImage;