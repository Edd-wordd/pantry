import React from "react";
import { Link } from "react-router-dom";
import NavigationSignIn from "../ui/NavigationSignIn";
import pantryBackground from "../../img/maddi-bazzocco-UhrHTmVBzzE-unsplash.jpg";
import AppTemplate from "../ui/AppTemplate";

export default function Landing() {
   return (
      <div>
         <NavigationSignIn />
         <AppTemplate>
            <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-1 col-xl-6">
               <div className="landing-tex carousel-caption">
                  <h4 className="text-center">
                     Impressive collection of Recipes
                  </h4>
                  <p>Designed to look gorgeous together</p>
                  <p>
                     Now UI Kit Pro comes with a huge number of customisable
                     elements. They are not only designed to be pixel perfect
                     and light but they are also easy to use and combine well
                     with other components.
                  </p>
               </div>

               <img
                  className="backgroundImage img-fluid"
                  src={pantryBackground}
                  alt="background"
               ></img>
            </div>
            <div className="text-center offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 col-xl-4">
               <form style={{ marginTop: "150px" }}>
                  <h4>Your Recipes Await You!</h4>
                  <input className="mb-3 w-75" placeholder="FullName"></input>
                  <br />
                  <input className="mb-3 w-75" placeholder="Email"></input>
                  <br />

                  <input
                     className="mb-2 w-75"
                     placeholder="create password"
                  ></input>
                  <Link to="/recipes" className="btn btn-primary w-75">
                     Sign Up
                  </Link>
               </form>
            </div>
         </AppTemplate>
      </div>
   );
}
