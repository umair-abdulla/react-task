import React, { useState, useEffect } from 'react'
import Beer from './Beer';



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
        <Beer posts={posts} favouriteList={favouriteList} />
         {/* {posts.map((post) => {
            console.log("favList!!",favList)
            if(favList.includes(post.id))
            {
                console.log("favList includes this id!!",post.id)
                return (
                    <div>
                       
                       <Beer posts={posts}  />
                        </div>
                 
                 );
            }
          
       })} */}
     
     </div>
   )
}

export default Favourites