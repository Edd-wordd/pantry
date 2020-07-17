import React from "react";
import pantryBackground from "../../img/mae-mu-Pvclb-iHHYY-unsplash.jpg";
import AppTemplate from "../ui/AppTemplate";
import SignUp from "../ui/SignUp";
import { Link } from "react-router-dom";
import pantryLogo from "../../img/pantryLogo.png";

export default function Landing() {
   return (
      <div>
         <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <Link to="/" className="navbar-brand">
               <img
                  id="brandLogo"
                  src={pantryLogo}
                  width="75"
                  height="75"
                  alt="pantry logo"
               />
            </Link>
            <button
               className="navbar-toggler"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               type="button"
               name="button"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                     <Link to="/signIn" className="nav-link" role="button">
                        Sign In
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
         <AppTemplate>
            <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-1 col-xl-6">
               <div className="landing-text carousel-caption">
                  <h4 className="text-center">
                     Impressive collection of Recipes
                  </h4>
                  <p>Designed to make great food in a breeze!</p>
                  {/* <p></p> */}
               </div>

               <img
                  className="backgroundImage img-fluid"
                  src={pantryBackground}
                  alt="background"
                  style={{ "border-radius": ".5rem" }}
               ></img>
            </div>

            <SignUp />
         </AppTemplate>
      </div>
   );
}
