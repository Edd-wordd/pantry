import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";

export default function SignIn() {
   return (
      <div>
         <Navigation />
         <div className="container landing-signIn">
            <div className="row">
               <div className="col-6 offset-3 text-center ">
                  <form>
                     <h3>Lets Sign In</h3>
                     <input
                        className="mb-3 w-75"
                        placeholder="enter email"
                     ></input>
                     <br />

                     <input
                        className="mb-2 w-75"
                        placeholder="password"
                     ></input>
                     <div className="clerfix"></div>
                     <Link to="/home" className="btn btn-primary">
                        Sign Up
                     </Link>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
