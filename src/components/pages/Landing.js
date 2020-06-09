import React from "react";

export default function Landing() {
   return (
      <div>
         <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <a className="navbar-brand" href="#">
               <img
                  id="brandLogo"
                  src="https://thumbs.dreamstime.com/z/graffiti-grin-wink-icon-face-black-over-white-graffiti-grin-wink-icon-face-black-white-117146447.jpg"
                  width="50"
                  height="50"
                  alt="pantry logo"
               />
               EDDWORDDS PANTRY
            </a>
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
                     <a className="nav-link" href="#">
                        Home{" "}
                     </a>
                  </li>

                  <li className="nav-item dropdown">
                     <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        href="#"
                     >
                        Recipes
                     </a>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <a className="dropdown-item" href="#">
                           item 1
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                           item 2{" "}
                        </a>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        href="#"
                     >
                        Pantry
                     </a>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <a className="dropdown-item" href="#">
                           item 1
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                           item 2{" "}
                        </a>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        href="#"
                     >
                        Designs
                     </a>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <a className="dropdown-item" href="#">
                           item 1
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                           item 2{" "}
                        </a>
                     </div>
                  </li>
               </ul>
            </div>
         </nav>
         <div class="container landing-signIn">
            <div class="row">
               <div class="col-12">
                  <section>
                     <h1>Impressive collection of elements</h1>
                     <p>Designed to look gorgeous together</p>
                     <p>
                        Now UI Kit Pro comes with a huge number of customisable
                        elements. They are not only designed to be pixel perfect
                        and light but they are also easy to use and combine well
                        with other components.
                     </p>

                     <div className="d-flex justify-content-center">
                        <form>
                           <input className="mb-2"></input>
                           <br />

                           <input></input>
                        </form>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </div>
   );
}
