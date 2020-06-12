import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";

export default function Pantry() {
   return (
      <div>
         <Navigation />
         <div className="container landing-signIn">
            <div className="row">
               <div className="col-12 text-center">
                  <h2>Impressive collection of Ingredients</h2>
                  <h5>Whats in that pantry!</h5>
                  <div className="col-9 offset-2">
                     <div className="form-row align-items-center">
                        <div className="col-auto"></div>
                        <div className="col-auto">
                           <input
                              type="text"
                              className="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div className="col-auto">
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
                        <div className="col-auto">
                           <button
                              type="submit"
                              className="btn btn-primary mb-2"
                           >
                              ADD to Pantry
                           </button>
                        </div>
                     </div>
                     <div className="form-row align-items-center">
                        <div className="col-auto"></div>
                        <div className="col-auto">
                           <input
                              type="text"
                              className="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div className="col-auto">
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
                        <div className="col-auto">
                           <button
                              type="submit"
                              className="btn btn-primary mb-2"
                           >
                              ADD to Pantry
                           </button>
                        </div>
                     </div>
                     <div className="form-row align-items-center">
                        <div className="col-auto"></div>
                        <div className="col-auto">
                           <input
                              type="text"
                              className="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div className="col-auto">
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
                        <div className="col-auto">
                           <button
                              type="submit"
                              className="btn btn-primary mb-2"
                           >
                              ADD to Pantry
                           </button>
                        </div>
                     </div>
                     <div className="row">
                        <div
                           className="card w-75 col-4 "
                           style={{ width: "18rem" }}
                        >
                           <div className="card-body ">
                              <h5 className="card-title">Pantry Inventory</h5>
                           </div>
                           <ul className="list-group list-group-flush">
                              <li className="list-group-item">cucumbers</li>
                              <li className="list-group-item">Tomatoes</li>
                              <li className="list-group-item">Bread</li>
                           </ul>
                           <div className="card-body">
                              <a href="#" className="card-link">
                                 Edit Pantry
                              </a>
                              <a href="#" className="card-link">
                                 ???
                              </a>
                           </div>
                        </div>
                        <div
                           className="card col-4 offset-2 w-75"
                           style={{ width: "18rem" }}
                        >
                           <div className="card-body ">
                              <h5 className="card-title">Out Of Stock</h5>
                           </div>
                           <ul className="list-group list-group-flush">
                              <li className="list-group-item">cucumbers</li>

                              <li className="list-group-item">Tomatoes</li>
                              <li className="list-group-item">Bread</li>
                           </ul>
                           <div className="card-body">
                              <a href="#" className="card-link">
                                 Edit Shopping list
                              </a>
                              <a href="#" className="card-link">
                                 ???
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
