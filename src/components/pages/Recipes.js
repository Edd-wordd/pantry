import React from "react";
import { Link } from "react-router-dom";

export default function Recipes() {
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
         <div className="container landing-signIn">
            <div className="row">
               <div className="col-12 ">
                  <h3 className="text-center">
                     Impressive collection of Recipes
                  </h3>
                  <form>
                     <div class="form-group">
                        <label for="inputAddress">Recipe Title</label>
                        <input
                           type="text"
                           class="form-control"
                           id="inputAddress"
                        />
                     </div>
                     <div class="form-row">
                        <div class="form-group col-md-4">
                           <label for="inputState">Pre-Time</label>
                           <select id="inputState" class="form-control">
                              <option selected>Choose...</option>
                              <option>5-10 mins</option>
                              <option>10-20 mins</option>
                              <option>30 or more mins</option>
                           </select>
                        </div>
                        <div class="form-group col-md-4">
                           <label for="inputState">Cook-Time</label>
                           <select id="inputState" class="form-control">
                              <option selected>Choose...</option>
                              <option>5-10 mins</option>
                              <option>10-20 mins</option>
                              <option>30 or more mins</option>
                           </select>
                        </div>
                     </div>

                     <div class="form-row">
                        <div class="form-group col-md-6">
                           <label for="inputEmail4">Amount of Ingredient</label>
                           <input
                              type="email"
                              class="form-control"
                              id="inputEmail4"
                           />
                        </div>
                        <div class="form-group col-md-6">
                           <label for="inputPassword4">Ingredient</label>
                           <input
                              type="password"
                              class="form-control"
                              id="inputPassword4"
                           />
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="form-group col-md-6">
                           <label for="inputEmail4">Amount of Ingredient</label>
                           <input
                              type="email"
                              class="form-control"
                              id="inputEmail4"
                           />
                        </div>
                        <div class="form-group col-md-6">
                           <label for="inputPassword4">Ingredient</label>
                           <input
                              type="password"
                              class="form-control"
                              id="inputPassword4"
                           />
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="form-group col-md-6">
                           <label for="inputEmail4">Amount of Ingredient</label>
                           <input
                              type="email"
                              class="form-control"
                              id="inputEmail4"
                           />
                        </div>
                        <div class="form-group col-md-6">
                           <label for="inputPassword4">Ingredient</label>
                           <input
                              type="password"
                              class="form-control"
                              id="inputPassword4"
                           />
                        </div>
                     </div>

                     <div class="form-group">
                        <label for="inputAddress2">Step 1:</label>
                        <input
                           type="text"
                           class="form-control"
                           id="inputAddress2"
                        />
                     </div>
                     <div class="form-group">
                        <label for="inputAddress2">Step 2:</label>
                        <input
                           type="text"
                           class="form-control"
                           id="inputAddress2"
                        />
                     </div>
                     <div class="form-group">
                        <label for="inputAddress2">Step 3:</label>
                        <input
                           type="text"
                           class="form-control"
                           id="inputAddress2"
                        />
                     </div>
                     <div class="form-group">
                        <label for="inputAddress2">Step 4:</label>
                        <input
                           type="text"
                           class="form-control"
                           id="inputAddress2"
                        />
                     </div>
                     <div class="form-group">
                        <label for="inputAddress2">Additional Notes:</label>
                        <input
                           type="text"
                           class="form-control"
                           id="inputAddress2"
                        />
                     </div>
                     <div class="form-group float-right">
                        <div class="form-check">
                           <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                           />
                           <label class="form-check-label" for="gridCheck">
                              Add to favorite Recipes
                           </label>
                        </div>
                     </div>
                     <div className="clearfix"></div>
                     <div className="float-right mb-5">
                        <button className="btn btn-danger mr-5">
                           Delete Recipe
                        </button>

                        <button className="btn btn-primary">ADD Recipe</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
