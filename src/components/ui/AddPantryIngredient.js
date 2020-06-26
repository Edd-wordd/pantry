import React from "react";
import ingredients from "../../mock data/ingredients";
import axios from "axios";

// class AddPantryIngredient extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          isInstock: false,
//       };

//       axios
//          .get(
//             "https://github.com/Edd-wordd/pantry/blob/master/src/mock%20data/ingredients.js"
//          )
//          .then(function (response) {
//             // handle success
//             console.log(response);
//          })
//          .catch(function (error) {
//             // handle error
//             console.log(error);
//          })
//          .finally(function () {
//             // always executed
//          });
//       console.log(ingredients);
//    }

//    checkisInstock() {
//       this.setState({ isInstock: !this.state.isInstock });
//    }

//    render() {
//       return (
//          <>
//             <ul className="list-group list-group-flush">
//                <div className="custom-control custom-switch ">
//                   <div className="row">
//                      <input
//                         type="checkbox"
//                         className="custom-control-input col-1"
//                         id={props.ingredients}
//                         defaultChecked={this.state.isInstock}
//                      />

//                      <label
//                         className="custom-control-label"
//                         htmlFor={props.ingredients}
//                      >
//                         In-Stock
//                      </label>

//                      <li className=" col-6">{props.ingredients}</li>
//                      <button className="btn btn-danger btn-sm col-3">
//                         delete
//                      </button>
//                   </div>
//                   <hr />
//                </div>
//             </ul>
//          </>
//       );
//    }
// }

export default function AddPantryIngredient(props) {
   axios
      .get(
         "https://github.com/Edd-wordd/pantry/blob/master/src/mock%20data/ingredients.js"
      )
      .then(function (response) {
         // handle success
         console.log(response);
      })
      .catch(function (error) {
         // handle error
         console.log(error);
      })
      .finally(function () {
         // always executed
      });
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
                     In-Stock
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

// export default AddPantryIngredient;
