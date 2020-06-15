import React from "react";

export default function AppTemplate(props) {
   return (
      <div className="container landing-signIn">
         <div className="row">{props.children}</div>
      </div>
   );
}
