import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
               <div className="col-6 offset-2">
                  <h2>Impressive collection of Meals</h2>
                  <div class="custom-control custom-switch">
                     <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customSwitch1"
                     />
                     <label class="custom-control-label" for="customSwitch1">
                        Toggle this switch element
                     </label>
                  </div>
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <h5 className="card-title text-center">Recipe One</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                           Card subtitle
                        </h6>
                        <p className="card-text">
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="card-link">
                           Card link
                        </a>
                        <a href="#" className="card-link">
                           Another link
                        </a>
                     </div>
                  </div>
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <h5 className="card-title text-center">Recipe Two</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                           Card subtitle
                        </h6>
                        <p className="card-text">
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="card-link">
                           Card link
                        </a>
                        <a href="#" className="card-link">
                           Another link
                        </a>
                     </div>
                  </div>{" "}
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <h5 className="card-title text-center">
                           {" "}
                           Recipe Three
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                           card subtitle
                        </h6>
                        <p className="card-text">
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="card-link">
                           Card link
                        </a>
                        <a href="#" className="card-link">
                           Another link
                        </a>
                     </div>
                  </div>{" "}
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <h5 className="card-title text-center"> Recipe four</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                           card sustitle
                        </h6>
                        <p className="card-text">
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="card-link">
                           Card link
                        </a>
                        <a href="#" className="card-link">
                           Another link
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
