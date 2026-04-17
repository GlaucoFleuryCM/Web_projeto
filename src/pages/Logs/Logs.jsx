import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import { FaCircle } from "react-icons/fa";

import './Logs.css'
import '../../index.css'

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
        ]

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
        const reg = registroAtivos[index]

        setRegistroSelecionado(reg)

        const agora = new Date()
        const formatado = agora.toISOString().slice(0,16) // yyyy-MM-ddTHH:mm
        setDataChegada(agora)

        setDataChegada(formatado)
        setOdometro("")
        setObservacoes("")

        setModalAberto(true)
    }

    const finalizarRetorno = (e) => {
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
            <h1 className="page-title-top">Movimentações Recentes</h1>
            <div id="container-tabelas">
                {registroAtivos.length !== 0 &&
                    (
                    <div className="table-wrapper">
                        <div className="lower-title">
                            <FaCircle color="#013185" size={14}/>
                            <span className = "page-title-table">Movimentações Ativas</span>
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

                {registroUltimos10.length !== 0 && (
                    <div className="table-wrapper">
                        <div className="lower-title">
                            <FaCircle color="#013185" size={14}/>
                            <span className="page-title-table">10 Últimas Movimentações</span>
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
                                <form className="form">

                                    <h2>Finalizar Retorno</h2>

                                    <div className="form-group"> 
                                        <label>Motorista: <span className="fixed">{registroSelecionado.motorista}</span></label>
                                        <label>Veículo: <span className="fixed">{registroSelecionado.veiculo}</span></label>
                                        <label>Motivo: <span className="fixed">{registroSelecionado.motivo}</span></label>
                                        <label>Data de saída: <span className="fixed">{registroSelecionado.saida}</span></label>
                                        <label>Ultimo Valor do Odômetro: <span className="fixed">{"110.710"}</span></label>
                                    </div>

                                    <div className="form-group">
                                        <label>Data de chegada:</label>
                                        <DatePicker
                                            selected={dataChegada}
                                            onChange={(date) => setDataChegada(date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            dateFormat="dd/MM/yyyy HH:mm"
                                            minDate={new Date()}
                                            className="form-field"
                                        />
                                    </div>

                                    <div className="form-group"> 
                                        <label>Odômetro:</label>
                                        <input
                                            className="form-field"
                                            type="number"
                                            value={odometro}
                                            onChange={(e) => setOdometro(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group"> 
                                        <label>Observações:</label>
                                        <textarea
                                            className="form-field"
                                            lang="pt-BR"
                                            rows={3}
                                            value={observacoes}
                                            onChange={(e) => setObservacoes(e.target.value)}
                                        />
                                    </div>

                                    <div className="botoes">
                                        <button className="submit" onClick={finalizarRetorno}>
                                            Finalizar retorno
                                        </button>

                                        <button className="submit" onClick={() => setModalAberto(false)}>
                                            Cancelar
                                        </button>
                                    </div>

                                </form>
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

    const itensPagina = 17

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