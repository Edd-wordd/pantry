import React from "react";
import { Link } from "react-router-dom";
import pantryLogo from "../../img/23a6d358-7bc0-4037-bdae-3c1727d4fa3f_200x200.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Navigation() {
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
                  <Nav.Link href="#features">Features</Nav.Link>
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
                  <li className="nav-item active">
                     <Link to="/Home" className="nav-link">
                        Home
                     </Link>
                  </li>

                  <li className="nav-item dropdown">
                     <Link
                        to="/recipes"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                     >
                        Recipes
                     </Link>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <Link to="/recipes" className="dropdown-item">
                           add
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/recipes" className="dropdown-item">
                           Favorites
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <Link
                        to="/pantry"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                     >
                        Pantry
                     </Link>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <Link to="/pantry" className="dropdown-item">
                           Update Pantry Items
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/pantry" className="dropdown-item">
                           item 2
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <Link to="/" className="nav-link" role="button">
                        Log Out
                     </Link>
                  </li>
               </ul>
            </div>
         </nav> */}
      </div>
   );
}
