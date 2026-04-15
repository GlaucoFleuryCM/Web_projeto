import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    LogRecente,
    LogGeral,
} from "./pages/Logs/Logs.jsx";
import Saida from "./pages/RegSaida";
import Veiculos from "./pages/Veiculos";
import Gerenciar from "./pages/Gerenciar";

import logo from "./assets/logo.png";

const MainContent = styled.div`
    margin-left: ${({ sidebarOpen }) => sidebarOpen ? "250px" : "80px"};
    padding-top: 80px;
    transition: margin-left 0.5s ease; 

    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0;

        background-image: url(${logo});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;

        opacity: 0.5;
        z-index: -1;
        pointer-events: none;
    }
`;

function App() {
      const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <Router>
            <Topbar />
            <Sidebar 
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <MainContent sidebarOpen={sidebarOpen}>
                <Routes>
                    <Route
                        path="/logs/recente"
                        element={<LogRecente />}
                    />
                    <Route
                        path="/logs/geral"
                        element={<LogGeral />}
                    />
                    <Route
                        path="/saida"
                        element={<Saida />}
                    />
                    <Route
                        path="/veiculos"
                        element={<Veiculos />}
                    />
                    <Route
                        path="/gerenciar"
                        element={<Gerenciar />}
                    />
                </Routes>
            </MainContent>
        </Router>
    );
}

export default App;