import React from "react";
import { useState } from "react";

import './Logs.css'

const registroUltimos10 = [
        {motorista: "Adriano", veiculo: "carro1", motivo: "Motivo X",
            destino: "Birigui", saida: "24/04/2026 xx:xx", chegada: "24/04/2026 yy:yy", active: "1"},
        {motorista: "Beto", veiculo: "carro2", motivo: "Motivo X",
            destino: "Birigui", saida: "23/04/2026 xx:xx", chegada: "23/04/2026 yy:yy", active: "1"},
        {motorista: "Carlos", veiculo: "carro3", motivo: "Motivo X",
            destino: "Birigui", saida: "22/04/2026 xx:xx", chegada: "22/04/2026 yy:yy", active: "1"},
        {motorista: "Douglas", veiculo: "carro4", motivo: "Motivo X",
            destino: "Birigui", saida: "21/04/2026 xx:xx", chegada: "21/04/2026 yy:yy", active: "0"},
        {motorista: "Eduardo", veiculo: "carro5", motivo: "Motivo X",
            destino: "Birigui", saida: "20/04/2026 xx:xx", chegada: "20/04/2026 yy:yy", active: "0"},
        {motorista: "Fabio", veiculo: "carro6", motivo: "Motivo X",
            destino: "Birigui", saida: "19/04/2026 xx:xx", chegada: "19/04/2026 yy:yy", active: "0"},
        {motorista: "Gustavo", veiculo: "carro7", motivo: "Motivo X",
            destino: "Birigui", saida: "18/04/2026 xx:xx", chegada: "18/04/2026 yy:yy", active: "0"},
        {motorista: "Henrique", veiculo: "carro8", motivo: "Motivo X",
            destino: "Birigui", saida: "17/04/2026 xx:xx", chegada: "17/04/2026 yy:yy", active: "0"},
        {motorista: "Igor", veiculo: "carro9", motivo: "Motivo X",
            destino: "Birigui", saida: "16/04/2026 xx:xx", chegada: "16/04/2026 yy:yy", active: "0"},
        {motorista: "Jonas", veiculo: "carro10", motivo: "Motivo X",
            destino: "Birigui", saida: "15/04/2026 xx:xx", chegada: "15/04/2026 yy:yy", active: "0"},

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
        {motorista: "Douglas", veiculo: "carro4", motivo: "Motivo X",
            destino: "Birigui", saida: "21/04/2026 xx:xx", estimada: "21/04/2026 yy:yy", active: "1"},
        {motorista: "Eduardo", veiculo: "carro5", motivo: "Motivo X",
            destino: "Birigui", saida: "20/04/2026 xx:xx", estimada: "23/04/2026 yy:yy", active: "1"},
        {motorista: "Fabio", veiculo: "carro6", motivo: "Motivo X",
            destino: "Birigui", saida: "19/04/2026 xx:xx", estimada: "19/04/2026 yy:yy", active: "1"},
        {motorista: "Gustavo", veiculo: "carro7", motivo: "Motivo X",
            destino: "Birigui", saida: "18/04/2026 xx:xx", estimada: "20/04/2026 yy:yy", active: "1"},
        {motorista: "Henrique", veiculo: "carro8", motivo: "Motivo X",
            destino: "Birigui", saida: "17/04/2026 xx:xx", estimada: "17/04/2026 yy:yy", active: "1"},
        {motorista: "Igor", veiculo: "carro9", motivo: "Motivo X",
            destino: "Birigui", saida: "16/04/2026 xx:xx", estimada: "16/04/2026 yy:yy", active: "1"},
        {motorista: "Jonas", veiculo: "carro10", motivo: "Motivo X",
            destino: "Birigui", saida: "15/04/2026 xx:xx", estimada: "15/04/2026 yy:yy", active: "1"},
    ])

    const [modalAberto, setModalAberto] = useState(false)
    const [registroSelecionado, setRegistroSelecionado] = useState(null)

    const [dataChegada, setDataChegada] = useState("")
    const [odometro, setOdometro] = useState("")
    const [observacoes, setObservacoes] = useState("")

    const confirmarChegada = (index) => {
        const reg = registroAtivos[index]

        setRegistroSelecionado(reg)

        const agora = new Date()
        const formatado = agora.toISOString().slice(0,16) // yyyy-MM-ddTHH:mm

        setDataChegada(formatado)
        setOdometro("")
        setObservacoes("")

        setModalAberto(true)
    }

    const finalizarRetorno = () => {
        console.log("retorno finalizado", {
            ...registroSelecionado,
            dataChegada,
            odometro,
            observacoes
        })

        setModalAberto(false)
    }

    return (
        <div className="log-recente">
            <h1 className="page-title">Movimentações Recentes</h1>
            <div id="container-tabelas">
                {registroAtivos.length !== 0 &&
                    (
                    <div className="table-wrapper">
                        <div className="lower-title">
                            <span className = "page-title">Movimentações Ativas</span>
                        </div>
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
                                                <button onClick={() => confirmarChegada(index)}>
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

                {registroUltimos10.length !== 0 && (
                    <div className="table-wrapper">
                        <div className="lower-title">
                            <span className="page-title">10 Últimas Movimentações</span>
                        </div>
                        <table className="10-ultimos">
                            <thead>
                                <tr>
                                    <th>Motorista</th>
                                    <th>Veículo</th>
                                    <th>Motivo</th>
                                    <th>Destino</th>
                                    <th>Saída</th>
                                    <th>Chegada</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registroUltimos10.map((reg) => (
                                    <tr className={reg.active === "0" ? ("unactive") : ("active")}>
                                        <td>{reg.motorista}</td>
                                        <td>{reg.veiculo}</td>
                                        <td>{reg.motivo}</td>
                                        <td>{reg.destino}</td>
                                        <td>{reg.saida}</td>
                                        <td>{reg.chegada}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {modalAberto && (
                            <div className="modal-overlay">
                                <div className="modal">

                                    <h2>Finalizar Retorno</h2>

                                    <p><b>Motorista:</b> {registroSelecionado.motorista}</p>
                                    <p><b>Veículo:</b> {registroSelecionado.veiculo}</p>
                                    <p><b>Origem:</b> {registroSelecionado.origem}</p>
                                    <p><b>Destino:</b> {registroSelecionado.destino}</p>
                                    <p><b>Data de saída:</b> {registroSelecionado.data}</p>

                                    <label><b>Data de chegada:</b></label>
                                    <input
                                        type="datetime-local"
                                        value={dataChegada}
                                        onChange={(e) => setDataChegada(e.target.value)}
                                    />

                                    <label><b>Odômetro:</b></label>
                                    <input
                                        type="number"
                                        value={odometro}
                                        onChange={(e) => setOdometro(e.target.value)}
                                    />

                                    <label><b>Observações:</b></label>
                                    <textarea
                                        value={observacoes}
                                        onChange={(e) => setObservacoes(e.target.value)}
                                    />

                                    <div className="modal-botoes">
                                        <button onClick={() => setModalAberto(false)}>
                                            Cancelar
                                        </button>

                                        <button onClick={finalizarRetorno}>
                                            Finalizar retorno
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export const LogGeral = () => {

    const [busca, setBusca] = useState("")

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
    const [paginaAtual, setPaginaAtual] = useState(1)

    const itensPagina = 25

    const indexFinal = paginaAtual * itensPagina

    const indexInicial = indexFinal - itensPagina

    const registroShowing = registrosFiltrados.slice(indexInicial, indexFinal)

    const totalPaginas = Math.ceil(registrosFiltrados.length / itensPagina)

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
                    </span>
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
                    {Array.from({ length: totalPaginas }, (_,i) => (
                        <button key={i} onClick={() => setPaginaAtual(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}

        </div>
    );
};