import React from "react";
import Navigation from "../ui/Navigation";
import RecipeCard from "../ui/RecipeCard";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import { ingredients } from "../../flattened/ingredients";
import { Dropdown, DropdownButton } from "react-bootstrap";
import searchIcon from "../../icons/magnifying-glass.svg";

class Home extends React.Component {
   constructor(props) {
      super(props);
      axios

         .get(
            "https://raw.githubusercontent.com/Edd-wordd/pantry/master/src/mock%20data/recipes.JSON"
         )
         .then((response) => {
            // handle success
            console.log("allRecipes", response);
            props.dispatch({
               type: actions.STORE_ALL_RECIPES,
               payload: response.data,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });

      console.log("test", ingredients);
      console.log(this.props.pantry.length);
      if (this.props.pantry.length === 0) {
         props.dispatch({
            type: actions.STORE_INGREDIENTS,
            payload: ingredients,
         });
      }
   }

   render() {
      const displayedRecipes = this.props.allRecipes.filter((recipe) => {
         for (let r in recipe.ingredients) {
            for (let p in this.props.pantry) {
               if (recipe.ingredients[r].id === this.props.pantry[p].id) {
                  if (!this.props.pantry[p].isInStock) {
                     return false;
                  }
               }
            }
         }
         return true;
      });

      return (
         <>
            <Navigation />
            <div className="landing-signIn">
               <div>
                  <h4 className="text-center mb-4">
                     Impressive collection of Recipes
                  </h4>
               </div>

               <div className="row ml-md-5">
                  <div className="col-10 offset-1 col-md-6 offset-md-3">
                     <form class="form-inline">
                        <input
                           class="form-control mr-sm-2"
                           type="search"
                           placeholder="What are you looking for?"
                           aria-label="Search"
                        />
                        <button
                           class="btn btn-outline-secondary my-2 my-sm-0"
                           type="submit"
                        >
                           Search&nbsp;
                           <img
                              src={searchIcon}
                              alt="search-icon"
                              className="mb-1"
                           />
                        </button>
                        <div className="ml-3">
                           <DropdownButton
                              id="dropdown-item-button"
                              title="Filter All Recipes By:   "
                              variant="outline-secondary"
                           >
                              {/* <Dropdown.ItemText>Filter By</Dropdown.ItemText> */}
                              <Dropdown.Item as="button">
                                 Favorites
                              </Dropdown.Item>
                              <Dropdown.Item as="button">
                                 Most Recent
                              </Dropdown.Item>
                              <Dropdown.Item as="button">
                                 Meal Type
                              </Dropdown.Item>
                              <Dropdown.Item as="button">A - Z</Dropdown.Item>
                              <Dropdown.Item as="button">Z - A</Dropdown.Item>
                           </DropdownButton>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <br style={{ clear: "both" }} />
            <div className="row">
               <div className="col-12 d-md-flex flex-md-row ">
                  {displayedRecipes.map((recipe) => {
                     return (
                        <RecipeCard
                           recipeName={recipe.title}
                           recipeCookTime={recipe.cookTime}
                           recipeServing={recipe.servingSize}
                           key={recipe.id}
                           id={recipe.id}
                           recipe={recipe}
                           favorites={recipe.favorites}
                           mealType={recipe.mealFor}
                        />
                     );
                  })}
               </div>
            </div>
         </>
      );
   }
}

function mapStateToProps(state) {
   return {
      allRecipes: state.allRecipes,
      pantry: state.pantry,
   };
}
export default connect(mapStateToProps)(Home);
