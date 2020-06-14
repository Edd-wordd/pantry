import React from "react";
import { Link } from "react-router-dom";
import pantryLogo from "../../img/pantryLogo.png";

export default function NavigationSignIn() {
   return (
      <div>
         <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <Link to="/" className="navbar-brand">
               <img
                  id="brandLogo"
                  src={pantryLogo}
                  width="75"
                  height="75"
                  alt="pantry logo"
               />
            </Link>
            <button
               className="navbar-toggler"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               type="button"
               name="button"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <Link to="/Home" className="nav-link">
                        Home
                     </Link>
                  </li>

                  <li className="nav-item dropdown">
                     <Link
                        to="/recipes"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                     >
                        Recipes
                     </Link>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <Link to="/recipes" className="dropdown-item">
                           add
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/recipes" className="dropdown-item">
                           Favorites
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <Link
                        to="/pantry"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                     >
                        Pantry
                     </Link>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <Link to="/pantry" className="dropdown-item">
                           Update Pantry Items
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/pantry" className="dropdown-item">
                           item 2
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <Link to="/signIn" className="nav-link" role="button">
                        Sign In
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}
