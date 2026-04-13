import React, { useState } from "react";

import styled from "styled-components";

const Top = styled.div`
    background: #013185;
    height: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 2rem;
    width: 100vw;

    position: fixed;
    z-index: 10;
`;

const Topbar = () => {
    return (
        <Top>
            <h1 style={{ color: "white", margin: 0, fontSize: "2rem", fontWeight: "bold" }}>
                Severino Manoel da Silva Neto
            </h1>
            <span style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
                Calmart
            </span>
        </Top>
    );
};

export default Topbar;