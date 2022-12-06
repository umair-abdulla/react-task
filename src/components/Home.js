import React, { useState, useEffect } from 'react'
import './Home.css';
import Beer from './Beer';
import Nav from './Nav';
import Favourites from './Favourites';

//HI
function Home(props) {

    const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://api.punkapi.com/v2/beers/')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         
   }, []);

   // let favItems= [];

   // const favToggle = (id) => {
   //    let updatedList = posts.map((post) => {
   //       return post.id === id
   //       ? {...favItems, fav: !post.fav}
   //       : favItems;

   //    });
   // }

  

  return (
    <div>
      <Nav/>
        {posts.map((post) => {
         return (
            <div>
               <div className='header'/>

               <Beer id={post.id} name={post.name} image_url={post.image_url} 
               first_brewed={post.first_brewed}  />
                </div>

         
         );
      })}
    
    </div>
  )
//   <Favourites posts={posts}/>

}

export default Home
