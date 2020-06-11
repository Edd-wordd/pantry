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
         <div className="container landing-signIn">
            <div className="row">
               <div className="col-12 text-center">
                  <h2>Impressive collection of Ingredients</h2>
                  <h5>Whats in that pantry!</h5>
                  <div className="col-9 offset-2">
                     <div class="form-row align-items-center">
                        <div class="col-auto">
                           <input
                              type="text"
                              class="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>
                        <div class="col-auto">
                           <input
                              type="text"
                              class="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div class="col-auto">
                           <div className="custom-control custom-switch">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customSwitchesChecked"
                                 defaultChecked
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customSwitchesChecked"
                              >
                                 In-Stock
                              </label>
                           </div>
                        </div>
                        <div class="col-auto">
                           <button type="submit" class="btn btn-primary mb-2">
                              ADD to Pantry
                           </button>
                        </div>
                     </div>
                     <div class="form-row align-items-center">
                        <div class="col-auto">
                           <input
                              type="text"
                              class="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>
                        <div class="col-auto">
                           <input
                              type="text"
                              class="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div class="col-auto">
                           <div className="custom-control custom-switch">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="custom2"
                                 defaultChecked
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="custom2"
                              >
                                 In-Stock
                              </label>
                           </div>
                        </div>
                        <div class="col-auto">
                           <button type="submit" class="btn btn-primary mb-2">
                              ADD to Pantry
                           </button>
                        </div>
                     </div>
                     <div class="form-row align-items-center">
                        <div class="col-auto">
                           <input
                              type="text"
                              class="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>
                        <div class="col-auto">
                           <input
                              type="text"
                              class="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div class="col-auto">
                           <div className="custom-control custom-switch">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="custom3"
                                 defaultChecked
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="custom3"
                              >
                                 In-Stock
                              </label>
                           </div>
                        </div>
                        <div class="col-auto">
                           <button type="submit" class="btn btn-primary mb-2">
                              ADD to Pantry
                           </button>
                        </div>
                     </div>
                     <div class="card w-75" style={{ width: "18rem" }}>
                        <div class="card-body">
                           <h5 class="card-title">Pantry Inventory</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                           <li class="list-group-item">cucumbers</li>
                           <li class="list-group-item">Tomatoes</li>
                           <li class="list-group-item">Bread</li>
                        </ul>
                        <div class="card-body">
                           <a href="#" class="card-link">
                              Edit Pantry
                           </a>
                           <a href="#" class="card-link">
                              ???
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
