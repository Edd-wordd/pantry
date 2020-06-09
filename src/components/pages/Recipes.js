import React from "react";
import { Link } from "react-router-dom";

export default function Recipes() {
   return (
      <div>
         <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <a className="navbar-brand" href="#">
               <img
                  id="brandLogo"
                  src="https://thumbs.dreamstime.com/z/graffiti-grin-wink-icon-face-black-over-white-graffiti-grin-wink-icon-face-black-white-117146447.jpg"
                  width="50"
                  height="50"
                  alt="pantry logo"
               />
               EDDWORDDS PANTRY
            </a>
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
                        <a className="dropdown-item" href="#">
                           item 1
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                           item 2{" "}
                        </a>
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
                        <a className="dropdown-item" href="#">
                           item 1
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                           item 2{" "}
                        </a>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        href="#"
                     >
                        Sign In
                     </a>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <a className="dropdown-item" href="#">
                           item 1
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                           item 2{" "}
                        </a>
                     </div>
                  </li>
               </ul>
            </div>
         </nav>
         <div class="container landing-signIn">
            <div class="row">
               <div class="col-12 text-center">
                  <h3>Impressive collection of Recipes</h3>
               </div>
            </div>
         </div>
      </div>
   );
}
