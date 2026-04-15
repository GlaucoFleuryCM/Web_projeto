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
} from "./pages/Logs";
import Saida from "./pages/RegSaida";
import Veiculos from "./pages/Veiculos";
import Gerenciar from "./pages/Gerenciar";
import LoginPage from "./login_page/LoginPage";
import { useLocation } from "react-router-dom";
import logo from "./assets/logo.png";

const MainContent = styled.div`
    margin-left: ${({ sidebarOpen }) => sidebarOpen ? "250px" : "80px"};
    padding-top: 80px;
    transition: margin-left 0.5s ease; 
    
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

// wrapper: React needs to return only one component
const AppContent = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation()
    if (location.pathname == "/login"){
        return (
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
                );
    }else{
        return (
            <>
                <Topbar/>
                <Sidebar 
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <MainContent sidebarOpen={sidebarOpen}>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/logs/recente" element={<LogRecente />} />
                        <Route path="/logs/geral" element={<LogGeral />} />
                        <Route path="/saida" element={<Saida />} />
                        <Route path="/veiculos" element={<Veiculos />} />
                        <Route path="/gerenciar" element={<Gerenciar />} />
                    </Routes>
                </MainContent>
            </>
        );
    }
}

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
            <Router>
                <AppContent 
                    sidebarOpen={sidebarOpen} 
                    setSidebarOpen={setSidebarOpen} 
                />
            </Router>
        );
}

export default App;