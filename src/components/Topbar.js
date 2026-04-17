import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaDoorOpen, FaBars } from "react-icons/fa";

/* CONTAINER */
const Top = styled.div`
    background: #013185;
    height: 80px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
`;

/* LADO ESQUERDO */
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

/* BOTÃO HAMBURGUER */
const MenuButton = styled.div`
    font-size: 1.8rem;
    color: white;
    cursor: pointer;

    display: block;

    @media (min-width: 768px) {
        display: none; /* só aparece no mobile */
    }
`;

/* LOGO / TÍTULO */
const Title = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

/* LADO DIREITO */
const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

/* NOME DO USUÁRIO */
const UserName = styled.span`
    color: white;
    font-weight: bold;
    font-size: 0.9rem;

    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
        font-size: 1.2rem;
        max-width: none;
    }
`;

const Topbar = ({ setIsLoggedIn, setSidebarOpen }) => {
    return (
        <Top>
            <Left>
                {/* BOTÃO MOBILE */}
                <MenuButton onClick={() => setSidebarOpen(prev => !prev)}>
                    <FaBars />
                </MenuButton>

                <Title>Calmart</Title>
            </Left>

            <Right>
                <UserName>
                    Severino Manoel da Silva Neto
                </UserName>

                <Link to="/login">
                    <div
                        onClick={() => setIsLoggedIn(false)}
                        style={{ cursor: "pointer" }}
                    >
                        <FaDoorOpen fontSize={"28px"} color="white" />
                    </div>
                </Link>
            </Right>
        </Top>
    );
};

export default Topbar;