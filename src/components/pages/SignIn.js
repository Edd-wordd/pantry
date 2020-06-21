import React from "react";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import SignInUi from "../ui/SignInUi";

export default function SignIn() {
   return (
      <div>
         <Navigation />
         <AppTemplate>
            <div className="col-4 offset-4 text-center ">
               <SignInUi />
            </div>
         </AppTemplate>
      </div>
   );
}
