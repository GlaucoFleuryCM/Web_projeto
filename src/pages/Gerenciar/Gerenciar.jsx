import { useState } from "react";
import "./Gerenciar.css"

const Gerenciar = () => {

    // 0 - Motoristas
    // 1 - Veículos
    // 2 - Motivos
    const [escopo, setEscopo] = useState(0);
    const [motoristas, setMotoristas] = useState([]);
    const [veiculos, setVeiculos] = useState([]);
    const [motivos, setMotivos] = useState([]);
    
    const [nome, setNome] = useState("");
    const [placa, setPlaca] = useState("");
    const [motivo, setMotivo] = useState("");

    const handleSubmit0 = (e) => {
        e.preventDefault();
        setMotoristas([...motoristas, nome]);
    };
    const handleDelete0 = (index) => {
        const novaLista = motoristas.filter((_, i) => i !== index);
        setMotoristas(novaLista);
    };
    
    const handleSubmit1 = (e) => {
        e.preventDefault();
        setVeiculos([...veiculos, placa]);
    };
    const handleDelete1 = (index) => {
        const novaLista = veiculos.filter((_, i) => i !== index);
        setVeiculos(novaLista);
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        setMotivos([...motivos, motivo]);
    };
    const handleDelete2 = (index) => {
        const novaLista = motivos.filter((_, i) => i !== index);
        setMotivos(novaLista);
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

                    <ul className="vizualização">
                        <li>
                            <span>Motorista 1</span>
                            <button className="delete-btn" onClick={() => {}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorista 2</span>
                            <button className="delete-btn" onClick={() => {}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorista 3</span>
                            <button className="delete-btn" onClick={() => {}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorista 4</span>
                            <button className="delete-btn" onClick={() => {}}>
                                &times;
                            </button>
                        </li>
                        {motoristas.map((m, i) => (
                            <li key={i}>
                                <span>{m}</span>
                                <button 
                                className="delete-btn"
                                type="button" onClick={() => handleDelete0(i)}>
                                    &times;
                                </button>
                            </li>
                        ))}
                    </ul>
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
                    
                    <ul className="vizualização">
                        <li>
                            <span>Veiculo 1</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Veiculo 2</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Veiculo 3</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        {veiculos.map((m, i) => (
                            <li key={i}>
                                <span>{m}</span>
                                <button 
                                className="delete-btn"
                                type="button" onClick={() => handleDelete1(i)}>
                                    &times;
                                </button>
                            </li>
                        ))}
                    </ul>
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
                    
                    <ul className="vizualização">
                        <li>
                            <span>Motivo 1</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motivo 2</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motivo 3</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        {motivos.map((m, i) => (
                            <li key={i}>
                                <span>{m}</span>
                                <button 
                                className="delete-btn"
                                type="button" onClick={() => handleDelete2(i)}>
                                    &times;
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Gerenciar;