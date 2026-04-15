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

const Topbar = () => {
    return (
        <Top>
            <Link to="/login">
                <figure>
                    <FaDoorOpen fontSize={"40px"} color="white"  path="/login"/>
                </figure>
            </Link>
            <h1 style={{ color: "white", fontSize: "2rem", fontWeight: "bold", paddingLeft: "40px"}}>
                Severino Manoel da Silva Neto
            </h1>
            <span style={{ color: "white", fontSize: "2rem", fontWeight: "bold", marginLeft: "auto" }}>
                Calmart
            </span>
        </Top>
    );
};

export default Topbar;