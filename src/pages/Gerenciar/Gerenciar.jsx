import { useState } from "react";
import ListaGerenciamento from "../../components/listaGerenciamento";
import "./Gerenciar.css"


const Gerenciar = () => {

    const [search, setSearch] = useState("");
        
    // 0 - Motoristas
    // 1 - Veículos
    // 2 - Motivos
    const [escopo, setEscopo] = useState(0);
    const [dados, setDados] = useState({
        motoristas: ["motorista1", "motorista2"],
        veiculos: [],
        motivos: []
    });
    const [nome, setNome] = useState("");
    const [placa, setPlaca] = useState("");
    const [motivo, setMotivo] = useState("");

    const handleSubmit0 = (e) => {
        e.preventDefault();

        setDados(prev => ({
            ...prev,
            motoristas: [...prev.motoristas, nome]
        }));

        setNome("");
        
        console.log(nome)
    };
    const handleSubmit1 = (e) => {
        e.preventDefault();

        setDados(prev => ({
            ...prev,
            veiculos: [...prev.veiculos, placa]
        }));

        setPlaca("");
    };
    const handleSubmit2 = (e) => {
        e.preventDefault();

        setDados(prev => ({
            ...prev,
            motivos: [...prev.motivos, motivo]
        }));

        setMotivo("");
    };

    const removerItem = (categoria, index) => {
        setDados(prev => ({
            ...prev,
            [categoria]: prev[categoria].filter((_, i) => i !== index)
        }));
    };

    return (
        <div className="gerenciar">
            <h1 className="page-title">Cadastrar ou Remover Itens</h1>
            <div className="categorias">
                <button 
                    className={`categoria-btn ${escopo === 0 ? "active" : ""}`}
                    onClick={() => setEscopo(0)}>Motoristas</button>
                <button 
                    className={`categoria-btn ${escopo === 1 ? "active" : ""}`}
                    onClick={() => setEscopo(1)}>Veículos</button>
                <button 
                    className={`categoria-btn ${escopo === 2 ? "active" : ""}`}
                    onClick={() => setEscopo(2)}>Motivos</button>
            </div> 
            
            {escopo === 0 && (
                <div className="container">
                    <form onSubmit={handleSubmit0}>
                        <div className="form-group">
                            <label htmlFor="nome">*Nome:</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field" required
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf">*CPF:</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field" required
                                id="cpf">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cargo">Cargo:</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field"
                                id="cargo">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contato 1">*Tel 1:</label>
                            <input
                                type="number"
                                placeholder="..."
                                className="form-field" required
                                id="contato1">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contato 2">Tel 2:</label>
                            <input
                                type="number"
                                placeholder="..."
                                className="form-field"
                                id="contato2">
                            </input>
                        </div>

                        <button className="submit" type="submit">Cadastrar</button>
                    </form>

                    <div className="data">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="search-bar"
                        />

                        <ListaGerenciamento
                            itens={dados.motoristas}
                            onDelete={(index) => removerItem("motoristas", index)}
                            search={search}
                        />
                    </div>
                </div>
            )}

            {escopo === 1 && (
                <div className="container">
                    <form onSubmit={handleSubmit1}>
                        <div className="form-group">
                            <label htmlFor="placa">*Placa</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field" required
                                id="placa"
                                value={placa}
                                onChange={(e) => setPlaca(e.target.value)}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="modelo">*Modelo</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field" required
                                id="modelo">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ano">Ano</label>
                            <input
                                type="number"
                                placeholder="..."
                                className="form-field"
                                id="ano">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="odometro">*Odômetro</label>
                            <input
                                type="number"
                                placeholder="..."
                                className="form-field" required
                                id="odometro">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="img">Imagem</label>
                            <input
                                type="file"
                                placeholder="..."
                                className="form-field"
                                id="img">
                            </input>
                        </div>

                        <button className="submit" type="submit">Cadastrar</button>
                    </form>
                    
                    <div className="data">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="search-bar"
                        />

                        <ListaGerenciamento
                            itens={dados.veiculos}
                            onDelete={(index) => removerItem("veiculos", index)}
                            search={search}
                        />
                    </div>
                </div>
            )}

            {escopo === 2 && (
                <div className="container">
                    <form onSubmit={handleSubmit2}>
                        <div className="form-group">
                            <label htmlFor="motivo">*Motivo</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field" required
                                id="motivo"
                                value={motivo}
                                onChange={(e) => setMotivo(e.target.value)}>
                            </input>
                        </div>

                        <button className="submit" type="submit">Cadastrar</button>
                    
                    </form>
                    <div className="data">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="search-bar"
                        />

                        <ListaGerenciamento
                            itens={dados.motivos}
                            onDelete={(index) => removerItem("motivos", index)}
                            search={search}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gerenciar;