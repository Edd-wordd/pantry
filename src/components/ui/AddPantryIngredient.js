import React from "react";
import ingredients from "../../mock data/ingredients";

export default function AddPantryIngredient(props) {
   console.log(ingredients);
   return (
      <>
         <ul className="list-group list-group-flush">
            <div className="custom-control custom-switch ">
               <div className="row">
                  <input
                     type="checkbox"
                     className="custom-control-input col-1"
                     id={props.ingredients}
                     defaultChecked
                  />

                  <label
                     className="custom-control-label"
                     htmlFor={props.ingredients}
                  >
                     In- Stock
                  </label>

                  <li className=" col-6">{props.ingredients}</li>
                  <button className="btn btn-danger btn-sm col-3">
                     delete
                  </button>
               </div>
               <hr />
            </div>
         </ul>
      </>
   );
}
