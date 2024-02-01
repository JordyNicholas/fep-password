import React from "react";
import PasswordIndex from "./pages/password";
import DefaultHeader from "./pages/header";
export default function RootPage() {

  return (      
    <div>
      <div className="header-div">
      <DefaultHeader 
        img="https://avatars.githubusercontent.com/u/56373651?v=4"
        firstMenu="GitHub"
        secMenu="Contacts"
        thirdMenu="About Me"/>
      </div>

      <div className="index-div">
        <PasswordIndex className="cssTest"/>
      </div>
    </div>
  )
}
