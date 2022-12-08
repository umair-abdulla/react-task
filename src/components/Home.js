import React, { useState, useEffect } from 'react'
import './Home.css';
import Beer from './Beer';
import Nav from './Nav';


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
   const favouriteList=false;
  

  return (
    <div>
      <Nav/>
      <Beer posts={posts} favouriteList={favouriteList}/>
    
    </div>
  )


}

export default Home
