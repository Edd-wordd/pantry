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
                  <h2 className="text-center">
                     Impressive collection of Meals
                  </h2>
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <h4 className="card-title text-center">
                           Turkey Sandwhich
                        </h4>
                        <div className="text-center ">
                           <h6 className="card-subtitle mb-2 text-muted">
                              Prep-Time
                           </h6>

                           <h6 className="card-subtitle mb-2 text-muted">
                              Cook-Time
                           </h6>
                           <h6 className="card-subtitle mb-2 text-muted">
                              Serving Size
                           </h6>
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">
                           Ingredients
                        </h6>
                        <p className="card-text">
                           <ul>
                              <li>2 slices whole wheat bread</li>
                              <li>3 slices smoked turkey breast</li>
                              <li>2 slices Colby-Monterey</li>
                              <li>4 slices avocado</li>
                              <li>2 leafs iceberg leetuce</li>
                           </ul>
                        </p>
                        <h5 className="card-subtitle mb-2 text-muted text-center">
                           Instructions
                        </h5>
                        <ol>
                           <li>Spread mayonnaise on one slice of toast</li>
                           <li>Arrange the sliced turkey on one side</li>
                           <li>Pile on the avocado and cheese</li>
                           <li>
                              Finish with tomato slices, then place the
                              remaining slice of toast on top.
                           </li>
                        </ol>
                        <h5>Notes:</h5>
                        <p>Make sure not to burn the toast.</p>
                        <div className="float-right">
                           <a href="#" className="card-link ">
                              Check Pantry
                           </a>
                           <a href="#" className="card-link ">
                              Add to Favorites
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <h4 className="card-title text-center">
                           Mushroom Sandwhich
                        </h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                           Ingredients
                        </h6>
                        <p className="card-text">
                           <ul>
                              <li>2 slices whole wheat bread</li>
                              <li>3 slices smoked turkey breast</li>
                              <li>2 slices Colby-Monterey</li>
                              <li>4 slices avocado</li>
                              <li>2 leafs iceberg leetuce</li>
                           </ul>
                        </p>
                        <h5 className="card-subtitle mb-2 text-muted text-center">
                           Instructions
                        </h5>
                        <ol>
                           <li>Spread mayonnaise on one slice of toast</li>
                           <li>Arrange the sliced turkey on one side</li>
                           <li>Pile on the avocado and cheese</li>
                           <li>
                              Finish with tomato slices, then place the
                              remaining slice of toast on top.
                           </li>
                        </ol>
                        <h5>Notes:</h5>
                        <p>Make sure not to burn the toast.</p>
                        <div className="float-right">
                           <a href="#" className="card-link ">
                              Check Pantry
                           </a>
                           <a href="#" className="card-link ">
                              Add to Favorites
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <h4 className="card-title text-center">
                           Tuna Sandwhich
                        </h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                           Ingredients
                        </h6>
                        <p className="card-text">
                           <ul>
                              <li>2 slices whole wheat bread</li>
                              <li>3 slices smoked turkey breast</li>
                              <li>2 slices Colby-Monterey</li>
                              <li>4 slices avocado</li>
                              <li>2 leafs iceberg leetuce</li>
                           </ul>
                        </p>
                        <h5 className="card-subtitle mb-2 text-muted text-center">
                           Instructions
                        </h5>
                        <ol>
                           <li>Spread mayonnaise on one slice of toast</li>
                           <li>Arrange the sliced turkey on one side</li>
                           <li>Pile on the avocado and cheese</li>
                           <li>
                              Finish with tomato slices, then place the
                              remaining slice of toast on top.
                           </li>
                        </ol>
                        <h5>Notes:</h5>
                        <p>Make sure not to burn the toast.</p>
                        <div className="float-right">
                           <a href="#" className="card-link ">
                              Check Pantry
                           </a>
                           <a href="#" className="card-link ">
                              Add to Favorites
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <h4 className="card-title text-center ">
                           Chicken Sandwhich
                        </h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                           Ingredients
                        </h6>
                        <p className="card-text">
                           <ul>
                              <li>2 slices whole wheat bread</li>
                              <li>3 slices smoked turkey breast</li>
                              <li>2 slices Colby-Monterey</li>
                              <li>4 slices avocado</li>
                              <li>2 leafs iceberg leetuce</li>
                           </ul>
                        </p>
                        <h5 className="card-subtitle mb-2 text-muted text-center">
                           Instructions
                        </h5>
                        <ol>
                           <li>Spread mayonnaise on one slice of toast</li>
                           <li>Arrange the sliced turkey on one side</li>
                           <li>Pile on the avocado and cheese</li>
                           <li>
                              Finish with tomato slices, then place the
                              remaining slice of toast on top.
                           </li>
                        </ol>
                        <h5>Notes:</h5>
                        <p>Make sure not to burn the toast.</p>
                        <div className="float-right">
                           <a href="#" className="card-link ">
                              Check Pantry
                           </a>
                           <a href="#" className="card-link ">
                              Add to Favorites
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
