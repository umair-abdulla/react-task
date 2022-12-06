import React, { useState } from "react";

const FavButton = ({ id }) => {
  const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"))

  const isFavourited = storageItem.includes(id)

  const handleToggleFavourite = () => {
    if (!isFavourited) {

      const newStorageItem = [...storageItem, id]
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    } else {

      const newStorageItem = storageItem.filter((savedId) => savedId !== id)
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    }


  return (
    <button onClick={handleToggleFavourite}
    className={isFavourited ? "fas fa-star text-warning"
    : "far fa-star text-warning"}>button
  </button>

  );


}
}


export default FavButton