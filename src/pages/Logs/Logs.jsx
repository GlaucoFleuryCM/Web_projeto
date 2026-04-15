import React from "react";
import { useState } from "react";

import './Logs.css'

const registroUltimos10 = [
        {motorista: "Adriano", veiculo: "carro1", origem: "Araçatuba",
                                destino: "Birigui", data: "24/04/2026"},
        {motorista: "Beto", veiculo: "carro2", origem: "Araçatuba",
                                destino: "Birigui", data: "23/04/2026"},
        {motorista: "Carlos", veiculo: "carro3", origem: "Araçatuba",
                                destino: "Birigui", data: "22/04/2026"},
        {motorista: "Douglas", veiculo: "carro4", origem: "Araçatuba",
                                destino: "Birigui", data: "21/04/2026"},
        {motorista: "Eduardo", veiculo: "carro5", origem: "Araçatuba",
                                destino: "Birigui", data: "20/04/2026"},
        {motorista: "Fabio", veiculo: "carro6", origem: "Araçatuba",
                                destino: "Birigui", data: "19/04/2026"},
        {motorista: "Gustavo", veiculo: "carro7", origem: "Araçatuba",
                                destino: "Birigui", data: "18/04/2026"},
        {motorista: "Henrique", veiculo: "carro8", origem: "Araçatuba",
                                destino: "Birigui", data: "17/04/2026"},
        {motorista: "Igor", veiculo: "carro9", origem: "Araçatuba",
                                destino: "Birigui", data: "16/04/2026"},
        {motorista: "Jonas", veiculo: "carro10", origem: "Araçatuba",
                                destino: "Birigui", data: "15/04/2026"},
    ]

const registroGeral = [
        {motorista: "Adriano", veiculo: "carro1", origem: "Araçatuba",
                                destino: "Birigui", data: "24/04/2026"},
        {motorista: "Beto", veiculo: "carro2", origem: "Araçatuba",
                                destino: "Birigui", data: "23/04/2026"},
        {motorista: "Carlos", veiculo: "carro3", origem: "Araçatuba",
                                destino: "Birigui", data: "22/04/2026"},
        {motorista: "Douglas", veiculo: "carro4", origem: "Araçatuba",
                                destino: "Birigui", data: "21/04/2026"},
        {motorista: "Eduardo", veiculo: "carro5", origem: "Araçatuba",
                                destino: "Birigui", data: "20/04/2026"},
        {motorista: "Fabio", veiculo: "carro6", origem: "Araçatuba",
                                destino: "Birigui", data: "19/04/2026"},
        {motorista: "Gustavo", veiculo: "carro7", origem: "Araçatuba",
                                destino: "Birigui", data: "18/04/2026"},
        {motorista: "Henrique", veiculo: "carro8", origem: "Araçatuba",
                                destino: "Birigui", data: "17/04/2026"},
        {motorista: "Igor", veiculo: "carro9", origem: "Araçatuba",
                                destino: "Birigui", data: "16/04/2026"},
        {motorista: "Jonas", veiculo: "carro10", origem: "Araçatuba",
                                destino: "Birigui", data: "15/04/2026"},
        {motorista: "Adriano", veiculo: "carro1", origem: "Araçatuba",
                                destino: "Birigui", data: "24/04/2026"},
        {motorista: "Beto", veiculo: "carro2", origem: "Araçatuba",
                                destino: "Birigui", data: "23/04/2026"},
        {motorista: "Carlos", veiculo: "carro3", origem: "Araçatuba",
                                destino: "Birigui", data: "22/04/2026"},
        {motorista: "Douglas", veiculo: "carro4", origem: "Araçatuba",
                                destino: "Birigui", data: "21/04/2026"},
        {motorista: "Eduardo", veiculo: "carro5", origem: "Araçatuba",
                                destino: "Birigui", data: "20/04/2026"},
        {motorista: "Fabio", veiculo: "carro6", origem: "Araçatuba",
                                destino: "Birigui", data: "19/04/2026"},
        {motorista: "Gustavo", veiculo: "carro7", origem: "Araçatuba",
                                destino: "Birigui", data: "18/04/2026"},
        {motorista: "Henrique", veiculo: "carro8", origem: "Araçatuba",
                                destino: "Birigui", data: "17/04/2026"},
        {motorista: "Igor", veiculo: "carro9", origem: "Araçatuba",
                                destino: "Birigui", data: "16/04/2026"},
        {motorista: "Jonas", veiculo: "carro10", origem: "Araçatuba",
                                destino: "Birigui", data: "15/04/2026"},
        {motorista: "Adriano", veiculo: "carro1", origem: "Araçatuba",
                                destino: "Birigui", data: "24/04/2026"},
        {motorista: "Beto", veiculo: "carro2", origem: "Araçatuba",
                                destino: "Birigui", data: "23/04/2026"},
        {motorista: "Carlos", veiculo: "carro3", origem: "Araçatuba",
                                destino: "Birigui", data: "22/04/2026"},
        {motorista: "Douglas", veiculo: "carro4", origem: "Araçatuba",
                                destino: "Birigui", data: "21/04/2026"},
        {motorista: "Eduardo", veiculo: "carro5", origem: "Araçatuba",
                                destino: "Birigui", data: "20/04/2026"},
        {motorista: "Fabio", veiculo: "carro6", origem: "Araçatuba",
                                destino: "Birigui", data: "19/04/2026"},
        {motorista: "Gustavo", veiculo: "carro7", origem: "Araçatuba",
                                destino: "Birigui", data: "18/04/2026"},
        {motorista: "Henrique", veiculo: "carro8", origem: "Araçatuba",
                                destino: "Birigui", data: "17/04/2026"},
        {motorista: "Igor", veiculo: "carro9", origem: "Araçatuba",
                                destino: "Birigui", data: "16/04/2026"},
        {motorista: "Jonas", veiculo: "carro10", origem: "Araçatuba",
                                destino: "Birigui", data: "15/04/2026"},
        {motorista: "Adriano", veiculo: "carro1", origem: "Araçatuba",
                                destino: "Birigui", data: "24/04/2026"},
        {motorista: "Beto", veiculo: "carro2", origem: "Araçatuba",
                                destino: "Birigui", data: "23/04/2026"},
        {motorista: "Carlos", veiculo: "carro3", origem: "Araçatuba",
                                destino: "Birigui", data: "22/04/2026"},
        {motorista: "Douglas", veiculo: "carro4", origem: "Araçatuba",
                                destino: "Birigui", data: "21/04/2026"},
        {motorista: "Eduardo", veiculo: "carro5", origem: "Araçatuba",
                                destino: "Birigui", data: "20/04/2026"},
        {motorista: "Fabio", veiculo: "carro6", origem: "Araçatuba",
                                destino: "Birigui", data: "19/04/2026"},
        {motorista: "Gustavo", veiculo: "carro7", origem: "Araçatuba",
                                destino: "Birigui", data: "18/04/2026"},
        {motorista: "Henrique", veiculo: "carro8", origem: "Araçatuba",
                                destino: "Birigui", data: "17/04/2026"},
        {motorista: "Igor", veiculo: "carro9", origem: "Araçatuba",
                                destino: "Birigui", data: "16/04/2026"},
        {motorista: "Jonas", veiculo: "carro10", origem: "Araçatuba",
                                destino: "Birigui", data: "15/04/2026"},
    ]

export const LogRecente = () => {

    // Registros Ativos contém os carros que estão sendo usados agora
    const [registroAtivos, setRegistroAtivos] = useState([
        {motorista: "Adriano", veiculo: "carro1", origem: "Araçatuba",
            destino: "Birigui", data: "24/04/2026", agendamento: "1"},
        {motorista: "Beto", veiculo: "carro2", origem: "Araçatuba",
            destino: "Birigui", data: "23/04/2026", agendamento: "1"},
        {motorista: "Carlos", veiculo: "carro3", origem: "Araçatuba",
            destino: "Birigui", data: "22/04/2026", agendamento: "1"},
        {motorista: "Douglas", veiculo: "carro4", origem: "Araçatuba",
            destino: "Birigui", data: "21/04/2026", agendamento: "1"},
        {motorista: "Eduardo", veiculo: "carro5", origem: "Araçatuba",
            destino: "Birigui", data: "20/04/2026", agendamento: "1"},
        {motorista: "Fabio", veiculo: "carro6", origem: "Araçatuba",
            destino: "Birigui", data: "19/04/2026", agendamento: "1"},
        {motorista: "Gustavo", veiculo: "carro7", origem: "Araçatuba",
            destino: "Birigui", data: "18/04/2026", agendamento: "1"},
        {motorista: "Henrique", veiculo: "carro8", origem: "Araçatuba",
            destino: "Birigui", data: "17/04/2026", agendamento: "1"},
        {motorista: "Igor", veiculo: "carro9", origem: "Araçatuba",
            destino: "Birigui", data: "16/04/2026", agendamento: "1"},
        {motorista: "Jonas", veiculo: "carro10", origem: "Araçatuba",
            destino: "Birigui", data: "15/04/2026", agendamento: "1"},
    ])

    const confirmarChegada = (index) => {
    console.log("confirmado")

    const novosRegistros = [...registroAtivos]

    novosRegistros[index].agendamento = "0"

    setRegistroAtivos(novosRegistros)
}

    return (
        <div className="log-recente">
            <h1 className="page-title">Movimentações Recentes</h1>
            <div id="container-tabelas">
                {registroAtivos.length !== 0 &&
                    (
                    <div className="table-wrapper">
                        <span>Movimentações Ativas</span>
                        <table className="ativos">
                            <thead>
                                <tr>
                                    <th>Motorista</th>
                                    <th>Veículo</th>
                                    <th>Origem</th>
                                    <th>Destino</th>
                                    <th>Data</th>
                                    <th>Chegada</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registroAtivos.map((reg, index) => (
                                    <tr key={index}>
                                        <td>{reg.motorista}</td>
                                        <td>{reg.veiculo}</td>
                                        <td>{reg.origem}</td>
                                        <td>{reg.destino}</td>
                                        <td>{reg.data}</td>
                                        <td>
                                            {reg.agendamento === "1" && (
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
                        <span>10 Últimas Movimentações</span>
                        <table className="10-ultimos">
                            <thead>
                                <tr>
                                    <th>Motorista</th>
                                    <th>Veículo</th>
                                    <th>Origem</th>
                                    <th>Destino</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registroUltimos10.map((reg) => (
                                    <tr>
                                        <td>{reg.motorista}</td>
                                        <td>{reg.veiculo}</td>
                                        <td>{reg.origem}</td>
                                        <td>{reg.destino}</td>
                                        <td>{reg.data}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
            ${reg.data}
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

            <input
                id="search-bar"
                type="text"
                placeholder="Buscar..."
                value={busca}
                onChange={(e) => {
                    setBusca(e.target.value)
                    setPaginaAtual(1)
                }}
            />

            <div className="table-wrapper">
                <table className="total">
                    <thead>
                        <tr>
                            <th>Motorista</th>
                            <th>Veículo</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registroShowing.map((reg, index) => (
                            <tr key={index}>
                                <td>{reg.motorista}</td>
                                <td>{reg.veiculo}</td>
                                <td>{reg.origem}</td>
                                <td>{reg.destino}</td>
                                <td>{reg.data}</td>
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