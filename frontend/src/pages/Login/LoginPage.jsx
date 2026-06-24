import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./LoginPage.css";

const LoginPage = ({ setIsLoggedIn, setNomeUsuario }) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const { data } = await api.post('/auth/login', { username, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('nomeUsuario', data.nome);
            localStorage.setItem('role', data.role);

            setNomeUsuario(data.nome);
            setIsLoggedIn(true);
            navigate("/veiculos");
        } catch (err) {
            const msg = err.response?.data?.message || "Erro ao conectar com o servidor";
            setError(`ERRO: ${msg}`);
        } finally {
            setLoading(false);
        }
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
                        disabled={loading}
                    />
                </div>

                <div className="input-group">
                    <label>SENHA</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="confirm-container">
                    <button type="submit" disabled={loading}>
                        {loading ? "Entrando..." : "Confirmar"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
