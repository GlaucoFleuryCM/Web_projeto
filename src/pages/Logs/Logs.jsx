import React, { useState, useEffect, useCallback } from "react";
import Chegada from "../../components/Chegada/Chegada";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCircle } from "react-icons/fa";
import api from "../../services/api";
import './Logs.css';
import '../../index.css';

const formatarData = (iso) => {
    if (!iso) return "—";
    return new Date(iso).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
};

export const LogRecente = () => {
    const [registrosAtivos, setRegistrosAtivos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState("");
    const [modalAberto, setModalAberto] = useState(false);
    const [registroSelecionado, setRegistroSelecionado] = useState(null);

    const carregarAtivos = useCallback(async () => {
        setErro("");
        try {
            const { data } = await api.get('/movimentos/ativos');
            setRegistrosAtivos(data);
        } catch {
            setErro("Erro ao carregar movimentações ativas.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        carregarAtivos();
    }, [carregarAtivos]);

    const confirmarChegada = (registro) => {
        setRegistroSelecionado(registro);
        setModalAberto(true);
    };

    const finalizarRetorno = async (dados) => {
        try {
            await api.post(`/movimentos/${registroSelecionado._id}/chegada`, {
                dataChegada: dados.dataChegada.toISOString(),
                odometroChegada: dados.odometro,
                observacoes: dados.observacoes,
            });
            setRegistrosAtivos((prev) => prev.filter((r) => r._id !== registroSelecionado._id));
            setModalAberto(false);
            setRegistroSelecionado(null);
        } catch (err) {
            alert(err.response?.data?.message || "Erro ao registrar chegada.");
        }
    };

    return (
        <div className="log-recente">
            <h1 className="page-title-top">Movimentações Ativas</h1>
            <div id="container-tabelas">
                {loading && <p style={{ textAlign: "center" }}>Carregando...</p>}
                {erro && <p style={{ color: "red" }}>{erro}</p>}

                {!loading && registrosAtivos.length === 0 && !erro && (
                    <p style={{ textAlign: "center", marginTop: "2rem" }}>Nenhuma movimentação ativa no momento.</p>
                )}

                {!loading && registrosAtivos.length > 0 && (
                    <div className="table-wrapper">
                        <table className="ativos">
                            <thead>
                                <tr>
                                    <th>Motorista</th>
                                    <th>Veículo</th>
                                    <th>Motivo</th>
                                    <th>Destino</th>
                                    <th>Saída</th>
                                    <th>Chegada Estimada</th>
                                    <th>Marcar Chegada</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrosAtivos.map((reg) => (
                                    <tr key={reg._id}>
                                        <td>{reg.motorista?.nome}</td>
                                        <td>{reg.veiculo?.modelo} — {reg.veiculo?.placa}</td>
                                        <td>{reg.motivo?.motivo}</td>
                                        <td>{reg.destino}</td>
                                        <td>{formatarData(reg.saida)}</td>
                                        <td>{formatarData(reg.retornoEstimado)}</td>
                                        <td>
                                            <button className="log-btn" onClick={() => confirmarChegada(reg)}>
                                                Confirmar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <Chegada
                    aberto={modalAberto}
                    registro={registroSelecionado}
                    onClose={() => setModalAberto(false)}
                    onFinalizar={finalizarRetorno}
                />
            </div>
        </div>
    );
};

export const LogGeral = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState("");
    const [busca, setBusca] = useState("");
    const [data, setData] = useState(0); // 0=todas,1=semana,2=quinzena,3=mês,4=custom
    const [dataPersonalizada, setDataPersonalizada] = useState(null);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPagina = 15;

    const carregarHistorico = useCallback(async () => {
        setLoading(true);
        setErro("");
        try {
            const params = {};
            if (data === 1) params.periodo = 'semana';
            else if (data === 2) params.periodo = 'quinzena';
            else if (data === 3) params.periodo = 'mes';
            else if (data === 4 && dataPersonalizada) {
                params.dataInicio = dataPersonalizada.toISOString().split('T')[0];
                params.dataFim = dataPersonalizada.toISOString().split('T')[0];
            }

            const { data: resposta } = await api.get('/movimentos/historico', { params });
            setTodos(resposta);
        } catch {
            setErro("Erro ao carregar histórico.");
        } finally {
            setLoading(false);
        }
    }, [data, dataPersonalizada]);

    useEffect(() => {
        carregarHistorico();
        setPaginaAtual(1);
    }, [carregarHistorico]);

    const termos = busca.toLowerCase().split(" ").filter(Boolean);

    const filtrados = todos.filter((reg) => {
        const texto = [
            reg.motorista?.nome,
            reg.veiculo?.placa,
            reg.veiculo?.modelo,
            reg.destino,
            reg.motivo?.motivo,
        ].join(' ').toLowerCase();
        return termos.every((t) => texto.includes(t));
    });

    const totalPaginas = Math.ceil(filtrados.length / itensPagina);
    const inicio = (paginaAtual - 1) * itensPagina;
    const mostrando = filtrados.slice(inicio, inicio + itensPagina);

    const classeBotaoData = (v) => `time-btn ${data === v ? "active" : ""}`;
    const classeBotaoPagina = (p) => `pagina-btn ${paginaAtual === p ? "active" : ""}`;

    return (
        <div className="log-geral">
            <h1 className="page-title">Todas Movimentações</h1>

            <div className="search-container">
                <input className="search-bar" type="text" placeholder="Buscar..."
                    value={busca} onChange={(e) => { setBusca(e.target.value); setPaginaAtual(1); }} />

                <div className="tooltip-container">
                    <span className="tooltip-icon">?</span>
                    <span className="tooltip-text">
                        Digite palavras para filtrar os resultados (motorista, veículo, etc).
                        É possível usar múltiplos termos separados por espaço.
                    </span>
                </div>

                <div className="time-btns">
                    <button className={classeBotaoData(1)} onClick={() => { setData(1); setPaginaAtual(1); }}>Última Semana</button>
                    <button className={classeBotaoData(2)} onClick={() => { setData(2); setPaginaAtual(1); }}>Últimos 15 dias</button>
                    <button className={classeBotaoData(3)} onClick={() => { setData(3); setPaginaAtual(1); }}>Último Mês</button>
                    <DatePicker
                        className={`time-btn ${data === 4 ? "active" : ""}`}
                        placeholderText="Outra Data"
                        selected={dataPersonalizada}
                        onChange={(d) => { setDataPersonalizada(d); setData(4); setPaginaAtual(1); }}
                        maxDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                    />
                    <button className={classeBotaoData(0)} onClick={() => { setData(0); setDataPersonalizada(null); setPaginaAtual(1); }}>Todas</button>
                </div>
            </div>

            {loading && <p style={{ textAlign: "center", marginTop: "2rem" }}>Carregando...</p>}
            {erro && <p style={{ color: "red", textAlign: "center" }}>{erro}</p>}

            {!loading && (
                <>
                    <div className="table-wrapper">
                        <table className="total">
                            <thead>
                                <tr>
                                    <th>Motorista</th>
                                    <th>Veículo</th>
                                    <th>Motivo</th>
                                    <th>Destino</th>
                                    <th>Odômetro (km)</th>
                                    <th>Saída</th>
                                    <th>Observações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mostrando.length === 0 ? (
                                    <tr><td colSpan={7} style={{ textAlign: "center" }}>Nenhum registro encontrado.</td></tr>
                                ) : mostrando.map((reg) => (
                                    <tr key={reg._id}>
                                        <td>{reg.motorista?.nome}</td>
                                        <td>{reg.veiculo?.modelo} — {reg.veiculo?.placa}</td>
                                        <td>{reg.motivo?.motivo}</td>
                                        <td>{reg.destino}</td>
                                        <td>{reg.odometroChegada?.toLocaleString() ?? "—"}</td>
                                        <td>{formatarData(reg.saida)}</td>
                                        <td>{reg.observacoes || "—"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filtrados.length > itensPagina && (
                        <div className="paginas">
                            {Array.from({ length: totalPaginas }, (_, i) => (
                                <button key={i} className={classeBotaoPagina(i + 1)} onClick={() => setPaginaAtual(i + 1)}>
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
