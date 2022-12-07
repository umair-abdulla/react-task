import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <div>
            <ul>
              <li>
                <Link to="/">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/favourites">
                  Favourites
                </Link>
              </li>           
            </ul>
        
        </div>
      </nav>
    )
}

export default Nav