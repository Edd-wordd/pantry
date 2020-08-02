import React from "react";
import pantryBackground from "../../img/mae-mu-Pvclb-iHHYY-unsplash.jpg";
import AppTemplate from "../ui/AppTemplate";
import SignUp from "../ui/SignUp";
import { Link } from "react-router-dom";
import pantryLogo from "../../img/pantryLogo.png";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

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
            <Navbar.Brand href="#home">
               PANTRY
               {/* <img
                  className="logo py-0"
                  id="brandLogo"
                  src={pantryLogo}
                  width="30px"
                  height="30px"
                  alt="pantry logo"
               /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                  <Nav.Link href="#features">About Us</Nav.Link>
                  <Nav.Link href="/pantry">Pantry</Nav.Link>
                  <NavDropdown title="Recipes" id="collasible-nav-dropdown">
                     <NavDropdown.Item href="/recipes">
                        Add Recipes
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/home">
                        View All Recipes
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">
                        Something
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
               <Nav>
                  <Nav.Link href="/">LogOut</Nav.Link>
                  {/* <Nav.Link eventKey={2} href="#memes">
                     Dank memes
                  </Nav.Link> */}
               </Nav>
            </Navbar.Collapse>
         </Navbar>

         {/* <nav className="navbar navbar-expand-md navbar-light fixed-top">
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
         </nav> */}
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
