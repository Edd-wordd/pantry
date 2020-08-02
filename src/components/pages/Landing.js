import React from "react";
import pantryBackground from "../../img/mae-mu-Pvclb-iHHYY-unsplash.jpg";
import AppTemplate from "../ui/AppTemplate";
import SignUp from "../ui/SignUp";
import { Link } from "react-router-dom";
import pantryLogo from "../../img/pantryLogo.png";
import { Nav, Navbar } from "react-bootstrap";

export default function Landing() {
   return (
      <div>
         <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
         >
            <Navbar.Brand href="#home">PANTRY</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                  <Nav.Link href="#features">About Us</Nav.Link>
               </Nav>
               <Nav>
                  <Nav.Link href="/signIn">Sign In</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>

         <AppTemplate>
            <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-1 col-xl-6">
               <div className="landing-text carousel-caption">
                  <h4 className="text-center">
                     Impressive collection of Recipes
                  </h4>
                  <p>Designed to make great food in a breeze!</p>
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
