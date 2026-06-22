import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaDoorOpen } from "react-icons/fa";
import calmartLogo from "../assets/calmart.jpeg";

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

const Topbar = ({ onLogout, nomeUsuario }) => {
    return (
        <Top>
            <img
                src={calmartLogo}
                alt="Calmart"
                className="topbar-logo"
                style={{ height: "50px", width: "auto", objectFit: "contain" }}
            />

            <div style={{ marginLeft: "auto", display: "flex", flexDirection: "row", gap: "2rem", alignItems: "center" }}>
                <span style={{ color: "white", fontSize: "1.6rem", fontWeight: "bold" }}>
                    {nomeUsuario}
                </span>
                <Link to="/login">
                    <figure onClick={onLogout} style={{ cursor: "pointer" }}>
                        <FaDoorOpen fontSize={"40px"} color="white" />
                    </figure>
                </Link>
            </div>
        </Top>
    );
};

export default Topbar;
