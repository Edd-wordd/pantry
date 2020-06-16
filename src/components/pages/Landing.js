import React from "react";
import NavigationSignIn from "../ui/NavigationSignIn";
import pantryBackground from "../../img/maddi-bazzocco-UhrHTmVBzzE-unsplash.jpg";
import AppTemplate from "../ui/AppTemplate";
import SignUp from "../ui/SignUp";

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

            <SignUp />
         </AppTemplate>
      </div>
   );
}
