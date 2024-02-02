import React from "react";
import PasswordGenerator from "./pages/[passwordGenerator]";
import DefaultHeader from "./components/header";
import PasswordManager from "./pages/[passwordManager]";
import './styles.css';

export default async function RootPage() {

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
        <PasswordGenerator className="cssTest"/>
        <PasswordManager/>
      </div>
    </div>
  )
}
