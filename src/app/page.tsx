import React from "react";
import PasswordIndex from "./pages/passwordGenerator";
import DefaultHeader from "./pages/header";
import './styles.css';

export default function RootPage() {

  return (      
    <div className="root-div">
      <div className="header-div">
      <DefaultHeader 
        img="https://avatars.githubusercontent.com/u/56373651?v=4"
        firstMenu="Password Generator"
        secMenu="Password Manager"
        thirdMenu="About"/>
      </div>
      <div className="body-div">
        <PasswordIndex className="cssTest"/>
      </div>
    </div>
  )
}
