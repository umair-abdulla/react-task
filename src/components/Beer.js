import React from 'react'
import {useState} from 'react'
import Details from './Details';
import { useNavigate } from "react-router-dom";



function Beer({posts,favouriteList}) {

    let favList = localStorage.getItem("favourites");
    const props=posts
    const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"))

    let isFavourited = []
    props.map((i)=>{
        let isFavKey;
        isFavKey=i.id;
     if(favList && favList.includes(i.id))
      { 
        isFavourited.push(true)} 
      else {
        isFavourited.push(false)
      }
    })
    const handleToggleFavourite = (id) => {

        const isFav = storageItem.includes(id)

      if (!isFav) {
        const newStorageItem = [...storageItem, id]
        setStorageItem(newStorageItem);
        localStorage.setItem("favourites", JSON.stringify(newStorageItem))
  
      } else {

        const newStorageItem = storageItem.filter((savedId) => savedId !== id)
        setStorageItem(newStorageItem);
        localStorage.setItem("favourites", JSON.stringify(newStorageItem))
  
      }
}
      const navigate = useNavigate();
      const navigateToDetails = (id) => {
      //  Details(id)
        navigate(`/details/${id}`);
      };
      
  return (
    <div>
        <table style={{'width':'100%', 'borderStyle':'solid'}}>
        <tr>
          <th style={{'borderStyle':'solid'}}>ID</th>
          <th style={{'borderStyle':'solid'}}>Image</th>
          <th style={{'borderStyle':'solid'}}>Name</th>
          <th style={{'borderStyle':'solid'}}>First-Brewed</th>
         { !favouriteList && <th style={{'borderStyle':'solid'}}>Favourites Button</th> }
         <th style={{'borderStyle':'solid'}}>Details</th>
        </tr>

        {props.map((val) => {
          return (
            <tr style={{'borderStyle':'solid', 'alignItems':'center'}} key={val.id}>
              <td style={{'borderStyle':'solid'}}>{val.id}</td>
              <td style={{'borderStyle':'solid'}}><img src={val.image_url} width={100} height={200}/></td>
              <td style={{'borderStyle':'solid'}}>{val.name}</td>
              <td style={{'borderStyle':'solid'}}>{val.first_brewed}</td>
             {!favouriteList && <td style={{'borderStyle':'solid',}}><button onClick={()=>{handleToggleFavourite(val.id)}}  key={val.id}
    className={isFavourited[val.id-1] ? "fas fa-star text-warning"
    : "far fa-star text-warning"}/></td>}
              <td style={{'borderStyle':'solid'}}> <button onClick={()=>{navigateToDetails(val.id)}} key={val.id} type="submit">Details</button>
  </td>

            </tr>
          )
        })}

        

      </table>


    </div> 
  )
}


export default Beer