import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {

  const handleClick = () =>{
    localStorage.removeItem("favourites");
  }

  return (
        <div>
            <ul className='ulist'>
              <li className='list'>
                <Link to="/favourites">Favourites</Link>
              </li>
              <li className='list' onClick={handleClick}>
                <Link to="/">Logout</Link>
              </li>           
            </ul>
        
        </div>

    )
}

export default Nav