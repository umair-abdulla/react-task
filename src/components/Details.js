import React from 'react'
import { useState, useEffect } from 'react'
import FavNav from './FavNav';
import "./Details.css"


function Details({id}) {
    const [beerData, setBeerData] = useState([]);

  const fetchData = (id) => {
    return fetch(`https://api.punkapi.com/v2/beers/${id}`)
          .then((response) => response.json())
          .then((data) => setBeerData(data));
  } 

  useEffect(() => {
     const url=new URL(window.location.href)

     let path=url.pathname.split("/")
    console.log("path!!",path[path.length-1])
    fetchData(path[path.length-1]);
  },[])


  return (
    <div>
        <div><FavNav/></div>
      <h1 className='text'>Beer details</h1>
      <div>
      
        {beerData && beerData.length > 0 && beerData.map((i) => (
          
            <div className='beerText'>

            <ul style={{'list-style':'none'}} key={i.id}>
            <img src={i.image_url}  width={100} height={200}></img>
            <h1 >{i.name}</h1>
            <h3 >"{i.tagline}"</h3>
            <br></br><br></br>
            <li>{i.description}</li>
            </ul>
            </div>
          ))}
      
      </div>
    </div>
  );
}
    
export default Details