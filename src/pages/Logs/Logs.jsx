import React from "react";
import Chegada from "../../components/Chegada/Chegada";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import { FaCircle } from "react-icons/fa";

import './Logs.css'
import '../../index.css'

const registroGeral = [
        {motorista: "Adriano", veiculo: "carro1", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "24/04/2026 xx:xx", observacoes: ""},
        {motorista: "Beto", veiculo: "carro2", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "23/04/2026 xx:xx", observacoes: ""},
        {motorista: "Carlos", veiculo: "carro3", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "22/04/2026 xx:xx", observacoes: ""},
        {motorista: "Douglas", veiculo: "carro4", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "21/04/2026 xx:xx", observacoes: ""},
        {motorista: "Eduardo", veiculo: "carro5", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "20/04/2026 xx:xx", observacoes: ""},
        {motorista: "Fabio", veiculo: "carro6", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "19/04/2026 xx:xx", observacoes: ""},
        {motorista: "Gustavo", veiculo: "carro7", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "18/04/2026 xx:xx", observacoes: ""},
        {motorista: "Henrique", veiculo: "carro8", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "17/04/2026 xx:xx", observacoes: ""},
        {motorista: "Igor", veiculo: "carro9", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "16/04/2026 xx:xx", observacoes: ""},
        {motorista: "Jonas", veiculo: "carro10", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "15/04/2026 xx:xx", observacoes: ""},
        {motorista: "Adriano", veiculo: "carro1", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "24/04/2026 xx:xx", observacoes: ""},
        {motorista: "Beto", veiculo: "carro2", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "23/04/2026 xx:xx", observacoes: ""},
        {motorista: "Carlos", veiculo: "carro3", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "22/04/2026 xx:xx", observacoes: ""},
        {motorista: "Douglas", veiculo: "carro4", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "21/04/2026 xx:xx", observacoes: ""},
        {motorista: "Eduardo", veiculo: "carro5", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "20/04/2026 xx:xx", observacoes: ""},
        {motorista: "Fabio", veiculo: "carro6", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "19/04/2026 xx:xx", observacoes: ""},
        {motorista: "Gustavo", veiculo: "carro7", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "18/04/2026 xx:xx", observacoes: ""},
        {motorista: "Henrique", veiculo: "carro8", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "17/04/2026 xx:xx", observacoes: ""},
        {motorista: "Igor", veiculo: "carro9", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "16/04/2026 xx:xx", observacoes: ""},
        {motorista: "Jonas", veiculo: "carro10", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "15/04/2026 xx:xx", observacoes: ""},
        {motorista: "Adriano", veiculo: "carro1", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "24/04/2026 xx:xx", observacoes: ""},
        {motorista: "Beto", veiculo: "carro2", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "23/04/2026 xx:xx", observacoes: ""},
        {motorista: "Carlos", veiculo: "carro3", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "22/04/2026 xx:xx", observacoes: ""},
        {motorista: "Douglas", veiculo: "carro4", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "21/04/2026 xx:xx", observacoes: ""},
        {motorista: "Eduardo", veiculo: "carro5", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "20/04/2026 xx:xx", observacoes: ""},
        {motorista: "Fabio", veiculo: "carro6", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "19/04/2026 xx:xx", observacoes: ""},
        {motorista: "Gustavo", veiculo: "carro7", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "18/04/2026 xx:xx", observacoes: ""},
        {motorista: "Henrique", veiculo: "carro8", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "17/04/2026 xx:xx", observacoes: ""},
        {motorista: "Igor", veiculo: "carro9", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "16/04/2026 xx:xx", observacoes: ""},
        {motorista: "Jonas", veiculo: "carro10", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "15/04/2026 xx:xx", observacoes: ""},
        {motorista: "Adriano", veiculo: "carro1", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "24/04/2026 xx:xx", observacoes: ""},
        {motorista: "Beto", veiculo: "carro2", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "23/04/2026 xx:xx", observacoes: ""},
        {motorista: "Carlos", veiculo: "carro3", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "22/04/2026 xx:xx", observacoes: ""},
        {motorista: "Douglas", veiculo: "carro4", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "21/04/2026 xx:xx", observacoes: ""},
        {motorista: "Eduardo", veiculo: "carro5", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "20/04/2026 xx:xx", observacoes: ""},
        {motorista: "Fabio", veiculo: "carro6", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "19/04/2026 xx:xx", observacoes: ""},
        {motorista: "Gustavo", veiculo: "carro7", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "18/04/2026 xx:xx", observacoes: ""},
        {motorista: "Henrique", veiculo: "carro8", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "17/04/2026 xx:xx", observacoes: ""},
        {motorista: "Igor", veiculo: "carro9", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "16/04/2026 xx:xx", observacoes: ""},
        {motorista: "Jonas", veiculo: "carro10", motivo: "Motivo X", destino: "Birigui",
                                odometro: "111.111", saida: "15/04/2026 xx:xx", observacoes: ""},
    ]

export const LogRecente = () => {

    // Registros Ativos contém os carros que estão sendo usados agora
    const [registroAtivos, setRegistroAtivos] = useState([
        {motorista: "Adriano", veiculo: "carro1", motivo: "Motivo X",
            destino: "Birigui", saida: "24/04/2026 xx:xx", estimada: "24/04/2026 yy:yy", active: "1"},
        {motorista: "Beto", veiculo: "carro2", motivo: "Motivo X",
            destino: "Birigui", saida: "23/04/2026 xx:xx", estimada: "23/04/2026 yy:yy", active: "1"},
        {motorista: "Carlos", veiculo: "carro3", motivo: "Motivo X",
            destino: "Birigui", saida: "22/04/2026 xx:xx", estimada: "22/04/2026 yy:yy", active: "1"},
    ])

    const [modalAberto, setModalAberto] = useState(false)
    const [registroSelecionado, setRegistroSelecionado] = useState(null)

    const [dataChegada, setDataChegada] = useState("")
    const [odometro, setOdometro] = useState("")
    const [observacoes, setObservacoes] = useState("")

    const confirmarChegada = (index) => {
        setRegistroSelecionado(registroAtivos[index])
        setModalAberto(true)
    }

    const finalizarRetorno = (dados) => {
        console.log("retorno finalizado", dados);
        setModalAberto(false);
    };

    return (
        <div className="log-recente">
            <h1 className="page-title-top">Movimentações Ativas</h1>
            <div id="container-tabelas">
                {registroAtivos.length !== 0 &&
                    (
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
                                {registroAtivos.map((reg, index) => (
                                    <tr key={index}>
                                        <td>{reg.motorista}</td>
                                        <td>{reg.veiculo}</td>
                                        <td>{reg.motivo}</td>
                                        <td>{reg.destino}</td>
                                        <td>{reg.saida}</td>
                                        <td>{reg.estimada}</td>
                                        <td>
                                            {reg.active === "1" && (
                                                <button className="log-btn" 
                                                        onClick={() => confirmarChegada(index)}>
                                                    Confirmar
                                                </button>
                                            )}
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

    const [busca, setBusca] = useState("")
    const [data, setData] = useState(0) // 0 = todas 1 = semana, 2 = 15 dias, 3 = mês, 4 = custom
    const [dataPersonalizada, setDataPersonalizada] = useState(null)
    const classeBotaoData = (valor) => `time-btn ${data === valor ? "active" : ""}`;

    const termos = busca
    .toLowerCase()
    .split(" ")
    .filter(t => t !== "")

    const registrosFiltrados = registroGeral.filter((reg) => {
        const texto = `
            ${reg.motorista}
            ${reg.veiculo}
            ${reg.origem}
            ${reg.destino}
            ${reg.saida}
        `.toLowerCase()

        return termos.every(termo => texto.includes(termo))
    })
    
    const parseData = (texto) => {
        const [data] = texto.split(" ")
        const [dia, mes, ano] = data.split("/")

        return new Date(ano, mes - 1, dia)
    }

    const [paginaAtual, setPaginaAtual] = useState(1)
    const itensPagina = 15
    const indexFinal = paginaAtual * itensPagina
    const indexInicial = indexFinal - itensPagina
    const registroShowing = registrosFiltrados.slice(indexInicial, indexFinal)
    const totalPaginas = Math.ceil(registrosFiltrados.length / itensPagina)
    const classeBotaoPagina = (pagina) =>paginaAtual === pagina ? "pagina-btn active" : "pagina-btn";


    const montarFiltros = () => ({
        busca,
        periodo: data,
        dataPersonalizada,
        pagina: paginaAtual,
        itensPagina
    })

    return (
        <div className="log-geral">

            <h1 className="page-title">Todas Movimentações</h1>

            <div className="search-container">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Buscar..."
                    value={busca}
                    onChange={(e) => {
                        setBusca(e.target.value)
                        setPaginaAtual(1)
                    }}
                />

                <div className="tooltip-container">
                    <span className="tooltip-icon">?</span>
                    <span className="tooltip-text">
                        Digite palavras para filtrar os resultados (motorista, veículo, etc).
                        É possível usar múltiplos termos separados por espaço para refinar a busca.
                    </span>
                </div>
                
                <div className="time-btns">
                    <button className={classeBotaoData(1)} onClick={() => setData(1)}>Última Semana</button>
                    <button className={classeBotaoData(2)} onClick={() => setData(2)}>Últimos 15 dias</button>
                    <button className={classeBotaoData(3)} onClick={() => setData(3)}>Último Mês</button>
                    <DatePicker
                        className={`time-btn ${data === 4 ? "active" : ""}`}
                        placeholderText="Outra Data"
                        selected={dataPersonalizada}
                        onChange={(date) => {
                            setDataPersonalizada(date)
                            setData(4)
                        }}
                        maxDate={new Date()}
                        dateFormat="dd/MM/yyyy">
                    </DatePicker>
                    <button className={classeBotaoData(0)} onClick={() => {
                        setData(0)
                        setDataPersonalizada(null)
                    }}>Todas</button>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="total">
                    <thead>
                        <tr>
                            <th>Motorista</th>
                            <th>Veículo</th>
                            <th>Motivo</th>
                            <th>Destino</th>
                            <th>Odômetro</th>
                            <th>Saída</th>
                            <th>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registroShowing.map((reg, index) => (
                            <tr key={index}>
                                <td>{reg.motorista}</td>
                                <td>{reg.veiculo}</td>
                                <td>{reg.motivo}</td>
                                <td>{reg.destino}</td>
                                <td>{reg.odometro}</td>
                                <td>{reg.saida}</td>
                                <td>{reg.observacoes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {registrosFiltrados.length > itensPagina && (
            <div className="paginas">
                {Array.from({ length: totalPaginas }, (_, i) => (
                    <button
                        key={i}
                        className={classeBotaoPagina(i + 1)}
                        onClick={() => setPaginaAtual(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        )}
        </div>
    );
};