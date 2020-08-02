import React from "react";
import AppTemplate from "../ui/AppTemplate";
import SignInUi from "../ui/SignInUi";
import { Link } from "react-router-dom";
import pantryLogo from "../../img/pantryLogo.png";
import { Nav, Navbar } from "react-bootstrap";

export default function SignIn() {
   return (
      <div>
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
                     <Link to="/" className="nav-link" role="button">
                        Back
                     </Link>
                  </li>
               </ul>
            </div>
         </nav> */}
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
               <Nav className="ml-auto"></Nav>
               <Nav>
                  <Nav.Link href="/">Back</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         <AppTemplate>
            <div className="col-4 offset-4 text-center ">
               <SignInUi />
            </div>
         </AppTemplate>
      </div>
   );
}
