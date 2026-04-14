import { useState } from "react";
import "./Gerenciar.css"

const Gerenciar = () => {

    // 0 - Motoristas
    // 1 - Veículos
    // 2 - Motivos
    const [escopo, setEscopo] = useState(0);
    
    return (
        <div className="gerenciar">
            <h1 className="page-title">Cadastrar ou Remover Itens</h1>
            <div className="categorias">
                <button onClick={() => setEscopo(0)}>Motoristas</button>
                <button onClick={() => setEscopo(1)}>Veículos</button>
                <button onClick={() => setEscopo(2)}>Motivos</button>
            </div> 
            
            {escopo == 0 && (
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">*Nome:</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field" required
                                id="nome"
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
                                id="contato 1">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contato 2">Tel 2:</label>
                            <input
                                type="number"
                                placeholder="..."
                                className="form-field"
                                id="contato 2">
                            </input>
                        </div>

                        <button className="submit" type="submit">Cadastrar</button>
                    </form>

                    <ul className="vizualização">
                        <li>
                            <span>Motorista 1</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorista 2</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorsita 3</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorista 4</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorista 5</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorsita 6</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorista 7</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorista 8</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                        <li>
                            <span>Motorsita 9</span>
                            <button className="delete-btn" onClick={() => {/* função de deletar */}}>
                                &times;
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            {escopo == 1 && (
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="placa">*Placa</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field" required
                                id="placa">
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
                                type="numero"
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
                                type="image"
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
                    </ul>
                </div>
            )}

            {escopo == 2 && (
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="motivo">*Motivo</label>
                            <input
                                type="text"
                                placeholder="..."
                                className="form-field" required
                                id="motivo">
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
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Gerenciar;