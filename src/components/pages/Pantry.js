import React from "react";
import { Link } from "react-router-dom";

export default function Pantry() {
   return (
      <div>
         <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <Link to="/" className="navbar-brand">
               <img
                  id="brandLogo"
                  src="https://thumbs.dreamstime.com/z/graffiti-grin-wink-icon-face-black-over-white-graffiti-grin-wink-icon-face-black-white-117146447.jpg"
                  width="50"
                  height="50"
                  alt="pantry logo"
               />
               EDDWORDDS PANTRY
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
                     <Link to="/" className="nav-link" role="button">
                        Log Out
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
         <div class="container landing-signIn">
            <div class="row">
               <div class="col-12 text-center">
                  <h2>Impressive collection of Ingredients</h2>
                  <h3>Whats in that pantry!</h3>
                  <label>Ingredient</label>
                  <input></input>
                  <label>Ingredient</label>
                  <input></input>
                  <label>Ingredient</label>
                  <input></input>
                  <br></br>
                  <label>Ingredient</label>
                  <input></input>
                  <label>Ingredient</label>
                  <input></input>
                  <label>Ingredient</label>
                  <input></input>
                  <br></br>
                  <button className="btn btn-primary">Find Recipes</button>
                  <form>
                     <div className="custom-control custom-switch">
                        <input
                           type="checkbox"
                           className="custom-control-input"
                           id="customSwitch1"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="customSwitch1"
                        >
                           Toggle this switch element
                        </label>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
