import React from "react";
import Navigation from "../ui/Navigation";
import plus from "../../icons/plus.svg";

export default function Pantry() {
   return (
      <div>
         <Navigation />
         <div className="container landing-signIn">
            <div className="row">
               <div className="col-12 col-xl-6 text-center pantry-divider pantry-ingredient">
                  <h5>Add your Ingredients</h5>
                  <div className="col-9 offset-2 ">
                     <div className="form-row align-items-center">
                        <div className="col-auto">
                           <input
                              type="text"
                              className="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div className="col-md-1 mb-3">
                           <img src={plus} alt="plus icon"></img>
                        </div>
                     </div>
                     <hr />
                     <div className="form-row align-items-center">
                        <div className="col-auto">
                           <input
                              type="text"
                              className="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div className="col-md-1 mb-3">
                           <img src={plus} alt="plus icon"></img>
                        </div>
                     </div>
                     <hr />

                     <div className="form-row align-items-center">
                        <div className="col-auto">
                           <input
                              type="text"
                              className="form-control mb-2"
                              id="inlineFormInput"
                           />
                        </div>

                        <div className="col-md-1 mb-3">
                           <img src={plus} alt="plus icon"></img>
                        </div>
                     </div>
                     <hr />
                  </div>
               </div>
               <div className=" mb-3 offset-1 col-10 col-xl-5">
                  <div className="card-body ">
                     <h5 className="card-title ">Pantry Inventory</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                     <div className="custom-control custom-switch">
                        <div className="row">
                           <input
                              type="checkbox"
                              className="custom-control-input col-1"
                              id="custom3"
                              defaultChecked
                           />

                           <label
                              className="custom-control-label"
                              htmlFor="custom3"
                           >
                              In- Stock
                           </label>
                           <li className=" col-6">cucumbers</li>
                           <button className="btn btn-danger btn-sm col-3">
                              delete
                           </button>
                        </div>
                        <hr />
                     </div>
                     <div className="custom-control custom-switch">
                        <div className="row">
                           <input
                              type="checkbox"
                              className="custom-control-input col-1"
                              id="custom2"
                              defaultChecked
                           />

                           <label
                              className="custom-control-label"
                              htmlFor="custom2"
                           >
                              In- Stock
                           </label>
                           <li className=" col-6">pasta</li>
                           <button className="btn btn-danger btn-sm col-3">
                              delete
                           </button>
                        </div>
                        <hr />
                     </div>
                     <div className="custom-control custom-switch">
                        <div className="row">
                           <input
                              type="checkbox"
                              className="custom-control-input col-1"
                              id="custom1"
                              defaultChecked
                           />

                           <label
                              className="custom-control-label"
                              htmlFor="custom1"
                           >
                              In- Stock
                           </label>
                           <li className=" col-6">onions</li>
                           <button className="btn btn-danger btn-sm col-3">
                              delete
                           </button>
                        </div>
                        <hr />
                     </div>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
