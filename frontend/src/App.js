import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar.js";
import Topbar from "./components/Topbar.js";
import Popup from "./components/Popup/Popup";
import api from "./services/api";
import { useEffect } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {
    LogRecente,
    LogGeral,
} from "./pages/Logs/Logs.jsx";

import Saida from "./pages/Saida/RegSaida.jsx";
import Veiculos from "./pages/Veiculos/Veiculos.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import Gerenciar from "./pages/Gerenciar/Gerenciar.jsx";

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
`;


const AppContent = ({ 
    sidebarOpen, setSidebarOpen, 
    isLoggedIn, setIsLoggedIn, 
    nomeUsuario, setNomeUsuario, 
    role 
}) => {
    const [modalAberto, setModalAberto] = useState(false);
    const [movimentoSelecionado, setMovimentoSelecionado] = useState(null);

    useEffect(() => {
        if (!isLoggedIn) return;

        const verificarAgendamentos = async () => {
            try {
                
                const { data } = await api.get(
                    "/movimentos/agendamentos-pendentes"
                );

                if (
                    data.length > 0 &&
                    !modalAberto
                ) {
                    setMovimentoSelecionado(data[0]);
                    setModalAberto(true);
                }
            } catch (err) {
                console.error(
                    "Erro ao verificar agendamentos:",
                    err
                );
            }
        };

        verificarAgendamentos();

        const interval = setInterval(
            verificarAgendamentos,
            60000
        );

        return () => clearInterval(interval);
    }, [isLoggedIn, modalAberto]);

    const confirmarAgendamento = async (movimento) => {
        try {
            await api.post(
                `/movimentos/${movimento._id}/confirmar-agendamento`
            );

            setModalAberto(false);
            setMovimentoSelecionado(null);
        } catch (err) {
            console.error(err);
        }
    };

    const cancelarAgendamento = async (movimento) => {
        try {
            await api.delete(
                `/movimentos/${movimento._id}/cancelar-agendamento`
            );

            setModalAberto(false);
            setMovimentoSelecionado(null);
        } catch (err) {
            console.error(err);
        }
    };
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('nomeUsuario');
        localStorage.removeItem('role');
        setIsLoggedIn(false);
        setNomeUsuario('');
    };

    return (
        <Routes>
            <Route
                path="/login"
                element={
                    isLoggedIn
                        ? <Navigate to="/veiculos" />
                        : <LoginPage setIsLoggedIn={setIsLoggedIn} setNomeUsuario={setNomeUsuario} />
                }
            />
            <Route
                path="/*"
                element={
                    isLoggedIn ? (
                        <>
                            <Topbar onLogout={handleLogout} nomeUsuario={nomeUsuario} />
                            <Sidebar
                                sidebarOpen={sidebarOpen}
                                setSidebarOpen={setSidebarOpen}
                                role={role}
                            />

                            <MainContent sidebarOpen={sidebarOpen}>
                                <Routes>
                                    <Route path="/logs/recente" element={<LogRecente />} />
                                    <Route path="/logs/geral" element={<LogGeral />} />
                                    <Route path="/saida" element={<Saida />} />
                                    <Route path="/veiculos" element={<Veiculos />} />
                                    <Route path="/gerenciar"  element={
                                        role == 'adm'
                                            ? <Gerenciar />
                                            : <Navigate to="/veiculos" />
                                    } />
                                </Routes>
                            </MainContent>

                            <Popup
                                aberto={modalAberto}
                                movimento={movimentoSelecionado}
                                onConfirmar={confirmarAgendamento}
                                onCancelar={cancelarAgendamento}
                            />
                        </>
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />
        </Routes>
    );
};

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [nomeUsuario, setNomeUsuario] = useState(localStorage.getItem('nomeUsuario') || '');
    const role = localStorage.getItem('role');

    return (
        <Router>
            <AppContent
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                nomeUsuario={nomeUsuario}
                setNomeUsuario={setNomeUsuario}
                role={role}
            />
        </Router>
    );
}

export default App;
