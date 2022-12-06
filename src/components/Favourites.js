import React, { useState, useEffect } from 'react'
import Beer from './Beer';
import Home from './Home';



function Favourites(props) {

    let favList = localStorage.getItem("favourites");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://api.punkapi.com/v2/beers/')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          
    }, []);
 
 
   return (
     <div>
         {posts.map((post) => {
            if(favList.includes(post.id))
            {
                return (
                    <div>
                       
                       <Beer id={post.id} name={post.name} image_url={post.image_url} 
                       first_brewed={post.first_brewed}  />
                        </div>
        
                 
                 );
            }
          
       })}
     
     </div>
   )
}

export default Favourites