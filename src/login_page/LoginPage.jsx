import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // essa Handle do JS lida com os Erros da Pagina 
    // (nós definimos quando dá erro)
    const handleSubmit = (e) => {
        e.preventDefault();

        // Dummy value: Seu Severino (Galo Cego)
        const dummyUser = {
            username: "Severino Manoel da Silva Neto",
            password: "1234"
        };

        if (username !== dummyUser.username) {
            setError("ERRO: usuário inexistente!");
            return;
        }
        if (password !== dummyUser.password) {
            setError("ERRO: senha incorreta!");
            return;
        }

        // sucesso em validacao (s/erro)
        setIsLoggedIn(true);  
        navigate("/"); 
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <div className="login-header">
                    <FaUser className="icon" />
                    <span>Preencha as informações abaixo:</span>
                </div>
                
                <div className="input-group">
                    <label>USUÁRIO</label>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>SENHA</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Erro */}
                {error && <div className="error-message">{error}</div>}

                <div className="confirm-container">
                    <button type="submit">Confirmar</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;