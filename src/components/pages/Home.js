import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";

export default function Home() {
   return (
      <div>
         <Navigation />

         <div className="container landing-signIn">
            <div className="row">
               <div className="col-6 offset-2">
                  <h2 className="text-center">
                     Impressive collection of Meals
                  </h2>
                  <div className="card mb-3" style={{ width: "50rem" }}>
                     <div className="card-body ">
                        <div className="card-header text-center mb-3">
                           Turkey Sandwhich
                        </div>
                        <div className="row mb-3">
                           <h6 className="card-subtitle mb-2 text-muted col-4">
                              Prep-Time: 5-10 mins
                           </h6>

                           <h6 className="card-subtitle mb-2 text-muted col-4">
                              Cook-Time: 10-20 mins
                           </h6>
                           <h6 className="card-subtitle mb-2 text-muted col-4">
                              Serving Size: 1 person
                           </h6>
                        </div>
                        <h6 className="card-subtitle text-muted">
                           Ingredients
                        </h6>
                        <p className="card-text"></p>
                        <ul>
                           <li>2 slices whole wheat bread</li>
                           <li>3 slices smoked turkey breast</li>
                           <li>2 slices Colby-Monterey</li>
                           <li>4 slices avocado</li>
                           <li>2 leafs iceberg leetuce</li>
                        </ul>

                        <button className=" mb-2 btn btn-md btn-primary col-6 offset-3">
                           Cook this Meal
                        </button>
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
                           <Link to="/pantry" className="card-link ">
                              Check Pantry
                           </Link>
                           <Link to="" className="card-link ">
                              Add to Favorites
                           </Link>
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
                        <p className="card-text"> </p>
                        <ul>
                           <li>2 slices whole wheat bread</li>
                           <li>3 slices smoked turkey breast</li>
                           <li>2 slices Colby-Monterey</li>
                           <li>4 slices avocado</li>
                           <li>2 leafs iceberg leetuce</li>
                        </ul>

                        <h5 className="card-subtitle mb-2 text-muted text-center">
                           Cook this Meal
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
                           <Link to="/pantry" className="card-link ">
                              Check Pantry
                           </Link>
                           <Link to="" className="card-link ">
                              Add to Favorites
                           </Link>
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
                        <p className="card-text"> </p>
                        <ul>
                           <li>2 slices whole wheat bread</li>
                           <li>3 slices smoked turkey breast</li>
                           <li>2 slices Colby-Monterey</li>
                           <li>4 slices avocado</li>
                           <li>2 leafs iceberg leetuce</li>
                        </ul>

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
                           <Link to="/pantry" className="card-link ">
                              Check Pantry
                           </Link>
                           <Link to="" className="card-link ">
                              Add to Favorites
                           </Link>
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
                        <p className="card-text"></p>
                        <ul>
                           <li>2 slices whole wheat bread</li>
                           <li>3 slices smoked turkey breast</li>
                           <li>2 slices Colby-Monterey</li>
                           <li>4 slices avocado</li>
                           <li>2 leafs iceberg leetuce</li>
                        </ul>

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
                           <Link to="/pantry" className="card-link ">
                              Check Pantry
                           </Link>
                           <Link to="" className="card-link ">
                              Add to Favorites
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
