import React, { useState, useEffect } from 'react'
import Beer from './Beer';
import FavNav from './FavNav';



function Favourites(props) {

    let favList = localStorage.getItem("favourites");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://api.punkapi.com/v2/beers/')
          .then((response) => response.json())
          .then((data) => {
             let fav=[]
              {data.map((i) => {
               
                    if(favList.includes(i.id))
                    {
                    console.log("This beer is in the favList!!!",i)
                       fav.push(i);
                    }
                
            })} 
            console.log("fav!!!",fav)
             setPosts(fav);
          })
          
    }, []);
 
    const favouriteList=true;
   return (
     <div>
      <FavNav></FavNav>
        <Beer posts={posts} favouriteList={favouriteList} />
         
     
     </div>
   )
}

export default Favourites