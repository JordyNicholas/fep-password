"use client"

import React from "react";
import { useState } from "react";


export default function PasswordIndex(props: {className: string}){
    const className = props.className;

    const [passwordData, setPasswordData] = useState(String);
    const [passwordLength, setPasswordLength] = useState(Number);
    const [useLowerCase, setUseLowerCase] = useState(Boolean);
    const [useUpperCase, setUseUpperCase] = useState(Boolean);
    const [useSymbols, setUseSymbols] = useState(Boolean);
    const [useNumbers, setUseNumbers] = useState(Boolean);
    const [sucessfulMessage ,setSuccessfulMessage] = useState(String);



    const generatePassword = () => {
        let charset = ""
        let newPassword = ""

        if(useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
        if(useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(useNumbers) charset += "0123456789";
        if(useSymbols) charset += "!@#$%^&*()";

        for( let i = 0; i < passwordLength; i++){
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        };
        setPasswordData(newPassword);
    };

    const copyToClipboard = () => {
        const element = document.createElement("textarea");
        element.value = passwordData;
        document.body.appendChild(element);
        element.select();
        document.execCommand("copy");
        document.body.removeChild(element);
        setSuccessfulMessage("Senha copiada para a área de transferência!");
        setTimeout(() => setSuccessfulMessage(""), 2000);
    }
 

    return(
    <div className="pw-Index">

        <div className="pw-Header">
            <h1>Password Generator</h1>
            <h3>A project made by Jordy!</h3>
        </div>

        <div className="pw-Options">
            <label htmlFor="">Password Length:</label>
            <input
            type="number"
            min="8"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)} required />

            <label>Include symbols?</label>
            <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)} />

            <label>Include Numbers?</label>
            <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)} />

            <label>Include Lower case letters?</label>
            <input
            type="checkbox"
            checked={useLowerCase}
            onChange={() => setUseLowerCase(!useLowerCase)} />

            <label>Include Upper case letters?</label>
            <input
            type="checkbox"
            checked={useUpperCase}
            onChange={() => setUseUpperCase(!useUpperCase)}/>
        </div>

        <div className="pw-genButton">
            <button
            type="button"
            onClick={generatePassword}>Generate</button>
            {passwordData && (
                <div className="pw-successMessage">
                    <label htmlFor="">Generated password: </label>
                    <input type="text" value={passwordData} readOnly/>
                <button
                    onClick={copyToClipboard}>Copy to Clipboard</button>
                </div>
            )}
            {sucessfulMessage && (
                <p>{sucessfulMessage}</p>
            )}
        </div>
    </div>
)}
