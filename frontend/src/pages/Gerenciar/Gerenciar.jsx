import { useState, useEffect, useCallback } from "react";
import ListaGerenciamento from "../../components/listaGerenciamento";
import PopupInfo from "../../components/PopupInfo/PopInfo.jsx";
import api from "../../services/api";
import "./Gerenciar.css";

const Gerenciar = () => {
    const [search, setSearch] = useState("");
    // 0 = Motoristas, 1 = Veículos, 2 = Motivos
    
    const [escopo, setEscopo] = useState(0);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    const [motoristas, setMotoristas] = useState([]);
    const [veiculos, setVeiculos] = useState([]);
    const [motivos, setMotivos] = useState([]);

    const [motoForm, setMotoForm] = useState({ nome: "", cpf: "", cargo: "", contato1: "", contato2: "" });
    const [veicForm, setVeicForm] = useState({ placa: "", modelo: "", ano: "", odometro: "" });
    const [veicImg, setVeicImg] = useState(null);
    const [motivoForm, setMotivoForm] = useState({ motivo: "" });

    const [popupAberto, setPopupAberto] = useState(false);
    const [dadosPopup, setDadosPopup] = useState([]);

    const validarCPF = (cpf) => {
        cpf = cpf.replace(/\D/g, "");

        if (cpf.length !== 11) return false;

        if (/^(\d)\1+$/.test(cpf)) return false;

        let soma = 0;

        for (let i = 0; i < 9; i++) {
            soma += Number(cpf[i]) * (10 - i);
        }

        let resto = (soma * 10) % 11;
        if (resto === 10) resto = 0;

        if (resto !== Number(cpf[9])) return false;

        soma = 0;

        for (let i = 0; i < 10; i++) {
            soma += Number(cpf[i]) * (11 - i);
        }

        resto = (soma * 10) % 11;
        if (resto === 10) resto = 0;

        return resto === Number(cpf[10]);
    };

    const validarPlaca = (placa) => {
        placa = placa.toUpperCase();

        const antiga = /^[A-Z]{3}[0-9]{4}$/;
        const mercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;

        return antiga.test(placa) || mercosul.test(placa);
    };

    const mostrarSucesso = (msg) => {
        setSucesso(msg);
        setTimeout(() => setSucesso(""), 3000);
    };

    const carregarDados = useCallback(async () => {
        setLoading(true);
        setErro("");
        try {
            if (escopo === 0) {
                const { data } = await api.get('/motoristas');
                setMotoristas(data);
            } else if (escopo === 1) {
                const { data } = await api.get('/veiculos');
                setVeiculos(data);
            } else {
                const { data } = await api.get('/motivos');
                setMotivos(data);
            }
        } catch {
            setErro("Erro ao carregar dados.");
        } finally {
            setLoading(false);
        }
    }, [escopo]);

    useEffect(() => {
        carregarDados();
        setSearch("");
    }, [carregarDados]);

    const handleSubmitMotorista = async (e) => {

        if (!validarCPF(motoForm.cpf)) {
            setErro("CPF inválido.");
            return;
        }

        e.preventDefault();
        setErro("");
        try {
            const { data } = await api.post('/motoristas', motoForm);
            setMotoristas((prev) => [...prev, data].sort((a, b) => a.nome.localeCompare(b.nome)));
            setMotoForm({ nome: "", cpf: "", cargo: "", contato1: "", contato2: "" });
            mostrarSucesso("Motorista cadastrado com sucesso!");
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao cadastrar motorista.");
        }
    };

    const handleSubmitVeiculo = async (e) => {

        if (!validarPlaca(veicForm.placa)) {
            setErro("Placa inválida.");
            return;
        }

        e.preventDefault();
        setErro("");
        try {
            const form = new FormData();
            Object.entries(veicForm).forEach(([k, v]) => { if (v) form.append(k, v); });
            if (veicImg) form.append('img', veicImg);

            const { data } = await api.post('/veiculos', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setVeiculos((prev) => [...prev, data].sort((a, b) => a.placa.localeCompare(b.placa)));
            setVeicForm({ placa: "", modelo: "", ano: "", odometro: "" });
            setVeicImg(null);
            mostrarSucesso("Veículo cadastrado com sucesso!");
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao cadastrar veículo.");
        }
    };

    const handleSubmitMotivo = async (e) => {
        e.preventDefault();
        setErro("");
        try {
            const { data } = await api.post('/motivos', motivoForm);
            setMotivos((prev) => [...prev, data].sort((a, b) => a.motivo.localeCompare(b.motivo)));
            setMotivoForm({ motivo: "" });
            mostrarSucesso("Motivo cadastrado com sucesso!");
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao cadastrar motivo.");
        }
    };

    const removerMotorista = async (id) => {
        setErro("");
        try {
            await api.delete(`/motoristas/${id}`);
            setMotoristas((prev) => prev.filter((m) => m._id !== id));
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao remover motorista.");
        }
    };

    const removerVeiculo = async (id) => {
        setErro("");
        try {
            await api.delete(`/veiculos/${id}`);
            setVeiculos((prev) => prev.filter((v) => v._id !== id));
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao remover veículo.");
        }
    };

    const removerMotivo = async (id) => {
        setErro("");
        try {
            await api.delete(`/motivos/${id}`);
            setMotivos((prev) => prev.filter((m) => m._id !== id));
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao remover motivo.");
        }
    };

    const abrirMotorista = (motorista) => {
        setDadosPopup([
            { label: "Nome", valor: motorista.nome },
            { label: "CPF", valor: motorista.cpf },
            { label: "Cargo", valor: motorista.cargo },
            { label: "Contato 1", valor: motorista.contato1 },
            { label: "Contato 2", valor: motorista.contato2 },
            { label: "Status", valor: motorista.status },
        ]);

        setPopupAberto(true);
    };

    const abrirVeiculo = (veiculo) => {
        setDadosPopup([
            { label: "Modelo", valor: veiculo.modelo },
            { label: "Marca", valor: veiculo.marca },
            { label: "Placa", valor: veiculo.placa },
            { label: "Ano", valor: veiculo.ano },
            { label: "Odômetro", valor: veiculo.odometro },
            { label: "Status", valor: veiculo.status },
        ]);

        setPopupAberto(true);
    };
    
    const abrirMotivo = (motivo) => {
        setDadosPopup([
            { label: "Motivo", valor: motivo.motivo },
        ]);

        setPopupAberto(true);
    };

    const cpfValido =
        motoForm.cpf === "" || validarCPF(motoForm.cpf);

    const placaValida =
        veicForm.placa === "" || validarPlaca(veicForm.placa);

    return (
        <>
            <div className="gerenciar">
                <h1 className="page-title">Cadastrar ou Remover Itens</h1>

                {erro && <div className="error-message" style={{ marginBottom: "1rem" }}>{erro}</div>}
                {sucesso && <div className="toast-success" style={{ position: "static", marginBottom: "1rem" }}><div className="toast-icon">✓</div><span>{sucesso}</span></div>}

                <div className="categorias">
                    <button className={`categoria-btn ${escopo === 0 ? "active" : ""}`} onClick={() => setEscopo(0)}>Motoristas</button>
                    <button className={`categoria-btn ${escopo === 1 ? "active" : ""}`} onClick={() => setEscopo(1)}>Veículos</button>
                    <button className={`categoria-btn ${escopo === 2 ? "active" : ""}`} onClick={() => setEscopo(2)}>Motivos</button>
                </div>

                {escopo === 0 && (
                    <div className="container">
                        <form onSubmit={handleSubmitMotorista}>
                            <div className="form-group">
                                <label>*Nome:</label>
                                <input type="text" placeholder="..." className="form-field" required
                                    value={motoForm.nome} onChange={(e) => setMotoForm(p => ({ ...p, nome: e.target.value }))} />
                            </div>
                            <div className="form-group">
                                <label>*CPF:</label>
                                <input
                                    type="text"
                                    placeholder="000.000.000-00"
                                    className={`form-field ${!cpfValido ? "input-error" : ""}`}
                                    required
                                    value={motoForm.cpf}
                                    onChange={(e) =>
                                        setMotoForm(p => ({ ...p, cpf: e.target.value }))
                                    }
                                />

                                {!cpfValido && (
                                    <small className="error-text">
                                        CPF inválido
                                    </small>
                                )}

                            </div>
                            <div className="form-group">
                                <label>Cargo:</label>
                                <input type="text" placeholder="..." className="form-field"
                                    value={motoForm.cargo} onChange={(e) => setMotoForm(p => ({ ...p, cargo: e.target.value }))} />
                            </div>
                            <div className="form-group">
                                <label>*Tel 1:</label>
                                <input type="text" placeholder="(xx) 9xxxx-xxxx" className="form-field" required
                                    value={motoForm.contato1} onChange={(e) => setMotoForm(p => ({ ...p, contato1: e.target.value }))} />
                            </div>
                            <div className="form-group">
                                <label>Tel 2:</label>
                                <input type="text" placeholder="(xx) 9xxxx-xxxx" className="form-field"
                                    value={motoForm.contato2} onChange={(e) => setMotoForm(p => ({ ...p, contato2: e.target.value }))} />
                            </div>
                            <button className="submit" type="submit">Cadastrar</button>
                        </form>

                        <div className="data">
                            <input type="text" placeholder="Buscar..." value={search}
                                onChange={(e) => setSearch(e.target.value)} className="search-bar" />
                            {loading ? <p>Carregando...</p> : (
                                <ListaGerenciamento itens={motoristas} onDelete={removerMotorista} onView={abrirMotorista} search={search} labelField="nome" />
                            )}
                        </div>
                    </div>
                )}

                {escopo === 1 && (
                    <div className="container">
                        <form onSubmit={handleSubmitVeiculo}>
                            <div className="form-group">
                                <label>*Placa:</label>
                                <input
                                    type="text"
                                    placeholder="ABC1D23"
                                    className={`form-field ${!placaValida ? "input-error" : ""}`}
                                    required
                                    value={veicForm.placa}
                                    onChange={(e) =>
                                        setVeicForm(p => ({ ...p, placa: e.target.value }))
                                    }
                                />

                                {!placaValida && (
                                    <small className="error-text">
                                        Placa inválida
                                    </small>
                                )}

                            </div>
                            <div className="form-group">
                                <label>*Modelo:</label>
                                <input type="text" placeholder="..." className="form-field" required
                                    value={veicForm.modelo} onChange={(e) => setVeicForm(p => ({ ...p, modelo: e.target.value }))} />
                            </div>
                            <div className="form-group">
                                <label>Ano:</label>
                                <input type="number" placeholder="2024" className="form-field"
                                    value={veicForm.ano} onChange={(e) => setVeicForm(p => ({ ...p, ano: e.target.value }))} />
                            </div>
                            <div className="form-group">
                                <label>*Odômetro (km):</label>
                                <input type="number" placeholder="0" className="form-field" required
                                    value={veicForm.odometro} onChange={(e) => setVeicForm(p => ({ ...p, odometro: e.target.value }))} />
                            </div>
                            <div className="form-group">
                                <label>Imagem:</label>
                                <input type="file" accept="image/*" className="form-field"
                                    onChange={(e) => setVeicImg(e.target.files[0])} />
                            </div>
                            <button className="submit" type="submit">Cadastrar</button>
                        </form>

                        <div className="data">
                            <input type="text" placeholder="Buscar..." value={search}
                                onChange={(e) => setSearch(e.target.value)} className="search-bar" />
                            {loading ? <p>Carregando...</p> : (
                                <ListaGerenciamento itens={veiculos} onDelete={removerVeiculo} onView={abrirVeiculo} search={search} labelField="placa" />
                            )}
                        </div>
                    </div>
                )}

                {escopo === 2 && (
                    <div className="container">
                        <form onSubmit={handleSubmitMotivo}>
                            <div className="form-group">
                                <label>*Motivo:</label>
                                <input type="text" placeholder="..." className="form-field" required
                                    value={motivoForm.motivo} onChange={(e) => setMotivoForm({ motivo: e.target.value })} />
                            </div>
                            <button className="submit" type="submit">Cadastrar</button>
                        </form>

                        <div className="data">
                            <input type="text" placeholder="Buscar..." value={search}
                                onChange={(e) => setSearch(e.target.value)} className="search-bar" />
                            {loading ? <p>Carregando...</p> : (
                                <ListaGerenciamento itens={motivos} onDelete={removerMotivo} onView={abrirMotivo} search={search} labelField="motivo" />
                            )}
                        </div>
                    </div>
                )}
            </div>
            
            <PopupInfo
                aberto={popupAberto}
                titulo="Informações"
                dados={dadosPopup}
                onClose={() => setPopupAberto(false)}
            />
        </>
    );
};

export default Gerenciar;
