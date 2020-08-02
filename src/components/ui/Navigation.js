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
            <Navbar.Brand href="#home">PANTRY</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                  {/* <Nav.Link href="#features">About Us</Nav.Link> */}
                  <NavDropdown title="Recipes" id="collasible-nav-dropdown">
                     <NavDropdown.Item href="/home">
                        View All Recipes
                     </NavDropdown.Item>
                     <NavDropdown.Item href="/recipes">
                        Add Recipes
                     </NavDropdown.Item>
                     {/* <NavDropdown.Item href="#action/3.3">
                        Something
                     </NavDropdown.Item> */}
                     {/* <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link href="/pantry">Pantry</Nav.Link>
               </Nav>
               <Nav>
                  <Nav.Link href="/">LogOut</Nav.Link>
                  {/* <Nav.Link eventKey={2} href="#memes">
                     Dank memes
                  </Nav.Link> */}
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   );
}
