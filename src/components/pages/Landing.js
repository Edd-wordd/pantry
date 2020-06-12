import React from "react";
import { Link } from "react-router-dom";
import NavigationSignIn from "../ui/NavigationSignIn";

export default function Landing() {
   return (
      <div>
         <NavigationSignIn />
         <div className="container landing-signIn">
            <div className="row">
               <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-1 col-xl-4">
                  <section>
                     <div className="text-center">
                        <h3>Impressive collection of Recipes</h3>
                        <p>Designed to look gorgeous together</p>
                     </div>
                     <p>
                        Now UI Kit Pro comes with a huge number of customisable
                        elements. They are not only designed to be pixel perfect
                        and light but they are also easy to use and combine well
                        with other components.
                     </p>
                     {/* <img
                        src="https://plantyou.com/wp-content/uploads/2019/11/plant-based-pantry-staples-top-tips.png"
                        alt="background pantry"
                     ></img> */}
                  </section>
               </div>
               <div className="text-center offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 offset-xl-1 col-xl-5">
                  <form>
                     <h3>Lets get started!</h3>
                     <input className="mb-3 w-100" placeholder="Email"></input>
                     <br />

                     <input
                        className="mb-2 w-100"
                        placeholder="create password"
                     ></input>
                     <Link
                        to="/home"
                        className="btn btn-primary float-right w-100"
                     >
                        Sign Up
                     </Link>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
