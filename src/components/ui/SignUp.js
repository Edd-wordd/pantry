import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      console.log("edward is here");
      this.state = {
         isSignUpClicked: false,
         emailerror: "",
         hasEmailError: false,
      };
   }

   validateAndCreateUser() {
      console.log("clicked");
      const emailInput = document.getElementById("signUpEmail").value;
      console.log(emailInput);

      const lowerCasedEmailInput = emailInput.toLowerCase();

      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (!emailRegex.test(String(lowerCasedEmailInput))) {
         this.setState({
            emailError: "Please enter A VALID email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }
   render() {
      return (
         <div className="text-center offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 col-xl-4">
            <div style={{ marginTop: "150px" }}>
               <h4 className="text-left">Your Recipes Await You!</h4>
               <input
                  className=" w-75 form-control mb-3"
                  placeholder="FullName"
               ></input>

               <input
                  className={classnames({
                     "w-75": true,
                     "form-control": true,
                     "is-invalid": this.state.hasEmailError,
                  })}
                  placeholder="Email"
                  id="signUpEmail"
                  type="email"
               />

               {this.state.hasEmailError && (
                  <small className="text-danger float-left mb-2">
                     {this.state.emailError}
                  </small>
               )}

               <input
                  className=" w-75 form-control mb-3 mt-3"
                  placeholder="Create Password"
               ></input>
               <Link
                  to=""
                  className="btn btn-primary w-75 float-left"
                  onClick={() => {
                     this.validateAndCreateUser();
                  }}
               >
                  Sign Up
               </Link>
            </div>
         </div>
      );
   }
}
