import React from 'react'
import {useState} from 'react'
import FavButton from './FavButton'


function Beer(props) {

    const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"))

    const isFavourited = storageItem.includes(props.id)
  
    const handleToggleFavourite = () => {
      if (!isFavourited) {
  
        const newStorageItem = [...storageItem, props.id]
        setStorageItem(newStorageItem);
        localStorage.setItem("favourites", JSON.stringify(newStorageItem))
  
      } else {
  
        const newStorageItem = storageItem.filter((savedId) => savedId !== props.id)
        setStorageItem(newStorageItem);
        localStorage.setItem("favourites", JSON.stringify(newStorageItem))
  
      }
}
      
  return (
    <div>
        <div  key={props.id}>
                <img src={props.image_url} alt='icons'/>                
                <p>{props.name}</p>
                <p>First brewed: {props.first_brewed}</p>
                <button onClick={handleToggleFavourite}
    className={isFavourited ? "fas fa-star text-warning"
    : "far fa-star text-warning"}>
  </button>
                </div>
    </div> 
  )
}


export default Beer