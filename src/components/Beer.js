import React from 'react'
import {useState} from 'react'


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
      
  return (
    <div>
        <table width="100%">
        <tr>
          <th >ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>First-Brewed</th>
         { !favouriteList && <th>Favourites Button</th> }
        </tr>

        {props.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td><img src={val.image_url} width={100} height={200}/></td>
              <td>{val.name}</td>
              <td>{val.first_brewed}</td>
             {!favouriteList && <td><button onClick={()=>{handleToggleFavourite(val.id)}}  key={val.id}
    className={isFavourited[val.id-1] ? "fas fa-star text-warning"
    : "far fa-star text-warning"}/></td>}
            </tr>
          )
        })}

        

      </table>


        {/* <div  key={props.id}>
                <img src={props.image_url} alt='icons'/>                
                <p>{props.name}</p>
                <p>First brewed: {props.first_brewed}</p>
                <button onClick={handleToggleFavourite}
    className={isFavourited ? "fas fa-star text-warning"
    : "far fa-star text-warning"}>
  </button>
                </div> */}
    </div> 
  )
}


export default Beer