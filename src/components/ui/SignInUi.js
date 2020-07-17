import React from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import actions from "../../store/actions";
import axios from "axios";
import { connect } from "react-redux";

class SignInUi extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isSignUpClicked: false,
         emailerror: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }
   async setEmailState(emailInput) {
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
   checkHasLocalPart(passwordInput, emailInput) {
      const localPart = emailInput.split("@")[0];
      if (localPart === "") return false;
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart);
   }
   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);

      const uniqChars = [...new Set(passwordInput)];
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter a password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Password must be 9 characters.",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         this.setState({
            passwordError: "Password cannot contain your email address.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "Password msut contain more then 3 unique characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      console.log("clicked");
      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;

      console.log(emailInput);
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdOn: Date.now(),
         };
         console.log("created user object for POST", user);
         axios
            .get(
               "https://raw.githubusercontent.com/Edd-wordd/pantry/master/src/mock%20data/user.JSON"
            )
            .then((res) => {
               // handle success
               const currentUser = res.data;
               console.log(currentUser);
               this.props.dispatch({
                  type: actions.STORE_CURRENT_USER,
                  payload: res.data,
               });
            })
            .catch((error) => {
               // handle error
               console.log(error);
            });
         this.props.history.push("/recipes");
      }
      // this.props.history.push("/Home");
   }

   render() {
      return (
         <>
            <h4 className="text-center">Lets Sign In</h4>

            <input
               className={classnames({
                  "form-control": true,
                  "is-invalid": this.state.hasEmailError,
               })}
               placeholder="Enter Email"
               id="email"
               type="email"
            />

            {this.state.hasEmailError && (
               <small className="text-danger float-left mb-2">
                  {this.state.emailError}
               </small>
            )}

            <input
               className={classnames({
                  "form-control": true,
                  "mt-3": true,
                  "is-invalid": this.state.hasPasswordError,
               })}
               placeholder="Enter Password"
               id="password"
               type="password"
            />
            {this.state.hasPasswordError && (
               <div className="text-danger float-left">
                  <small>{this.state.passwordError}</small>
               </div>
            )}

            <button
               className="btn btn-secondary w-100 mt-3"
               onClick={() => {
                  this.validateAndCreateUser();
               }}
            >
               Lets Go I'm Starving!
            </button>
         </>
      );
   }
}
function mapStateToProps(state) {
   return {};
}
export default withRouter(connect(mapStateToProps)(SignInUi));
