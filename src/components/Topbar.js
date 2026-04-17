import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaDoorOpen } from "react-icons/fa";

const Top = styled.div`
    background: #013185;
    height: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 0 1rem;
    width: 100vw;

    position: fixed;
    z-index: 10;
`;

const Topbar = ({ setIsLoggedIn}) => {
    return (
        <Top>
            <h1 style={{ color: "white", fontSize: "2rem", fontWeight: "bold", paddingLeft: "40px"}}>
                Calmart
            </h1>

            <div style={{marginLeft:"auto", display:"flex", flexDirection:"row", gap:"2rem", alignItems:"center"}}>
                <span style={{ color: "white", fontSize: "1.6rem", fontWeight: "bold"}}>
                    Severino Manoel da Silva Neto
                </span>
                <Link to="/login">
                    <figure
                        onClick={() => setIsLoggedIn(false)} 
                        style={{ cursor: "pointer" }}
                        >
                        <FaDoorOpen fontSize={"40px"} color="white" />
                    </figure>
                </Link>
            </div>
        </Top>
    );
};

export default Topbar;