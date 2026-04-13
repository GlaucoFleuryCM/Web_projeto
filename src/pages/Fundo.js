import React from "react";
import logo from "../assets/logo.png"; 

export const DesenharFundo = () => {
    return (
            <img
                width="1000px"
                className="fit-picture"
                src={logo} 
                alt="Logo"
            />
    );
};