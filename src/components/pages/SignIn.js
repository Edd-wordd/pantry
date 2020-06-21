import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import SignUp from "../ui/SignUp";

export default function SignIn() {
   return (
      <div>
         <Navigation />
         <AppTemplate>
            <div className="col-4 offset-4 text-center ">
               <form>
                  <h3>Lets Sign In</h3>
                  <input
                     className="form-control"
                     placeholder="Enter Email"
                  ></input>
                  <br />

                  <input
                     className="mb-2 form-control"
                     placeholder="Enter Password"
                  ></input>
                  <div className="clerfix"></div>
                  <Link to="/home" className="btn btn-primary">
                     Sign Up
                  </Link>
               </form>
            </div>
         </AppTemplate>
      </div>
   );
}
