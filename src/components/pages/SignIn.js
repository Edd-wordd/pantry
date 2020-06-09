import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
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
                     <Link to="/" className="nav-link">
                        Home
                     </Link>
                  </li>

                  <li className="nav-item dropdown">
                     <Link
                        to=""
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
               <div className="col-6 offset-3 text-center ">
                  <form>
                     <h1>Lets SIgn In</h1>
                     <input className="mb-3 w-100"></input>
                     <br />

                     <input className="mb-2 w-100"></input>
                     <Link
                        to="/recipes"
                        className="btn btn-primary float-right"
                     >
                        Sign Up
                     </Link>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
