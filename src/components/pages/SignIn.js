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
                     <h1>Lets Sign In</h1>
                     <input
                        className="mb-3 w-100"
                        placeholder="enter email"
                     ></input>
                     <br />

                     <input
                        className="mb-2 w-100"
                        placeholder="password"
                     ></input>
                     <Link to="/home" className="btn btn-primary float-right">
                        Sign Up
                     </Link>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
