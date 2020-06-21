import React from "react";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import AddPantryIngredient from "../ui/AddPantryIngredient";

export default function Pantry() {
   return (
      <div>
         <Navigation />
         <AppTemplate>
            <div className=" mb-3 offset-1 col-10 col-xl-5">
               <div className="card-body ">
                  <h5 className="card-title ">Pantry Inventory</h5>
               </div>
               <AddPantryIngredient />
               {/* <ul className="list-group list-group-flush">
                  <div className="custom-control custom-switch ">
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
               </ul> */}
            </div>
         </AppTemplate>
      </div>
   );
}
