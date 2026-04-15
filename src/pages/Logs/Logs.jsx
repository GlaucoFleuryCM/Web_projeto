import React from "react";
import { useState } from "react";

import './Logs.css'

const registroUltimos10 = [
        {motorista: "Adriano", veiculo: "carro1", motivo: "Motivo X",
                                destino: "Birigui", saida: "24/04/2026 xx:xx", chegada: "24/04/2026 yy:yy"},
        {motorista: "Beto", veiculo: "carro2", motivo: "Motivo X",
                                destino: "Birigui", saida: "23/04/2026 xx:xx", chegada: "23/04/2026 yy:yy"},
        {motorista: "Carlos", veiculo: "carro3", motivo: "Motivo X",
                                destino: "Birigui", saida: "22/04/2026 xx:xx", chegada: "22/04/2026 yy:yy"},
        {motorista: "Douglas", veiculo: "carro4", motivo: "Motivo X",
                                destino: "Birigui", saida: "21/04/2026 xx:xx", chegada: "21/04/2026 yy:yy"},
        {motorista: "Eduardo", veiculo: "carro5", motivo: "Motivo X",
                                destino: "Birigui", saida: "20/04/2026 xx:xx", chegada: "20/04/2026 yy:yy"},
        {motorista: "Fabio", veiculo: "carro6", motivo: "Motivo X",
                                destino: "Birigui", saida: "19/04/2026 xx:xx", chegada: "19/04/2026 yy:yy"},
        {motorista: "Gustavo", veiculo: "carro7", motivo: "Motivo X",
                                destino: "Birigui", saida: "18/04/2026 xx:xx", chegada: "18/04/2026 yy:yy"},
        {motorista: "Henrique", veiculo: "carro8", motivo: "Motivo X",
                                destino: "Birigui", saida: "17/04/2026 xx:xx", chegada: "17/04/2026 yy:yy"},
        {motorista: "Igor", veiculo: "carro9", motivo: "Motivo X",
                                destino: "Birigui", saida: "16/04/2026 xx:xx", chegada: "16/04/2026 yy:yy"},
        {motorista: "Jonas", veiculo: "carro10", motivo: "Motivo X",
                                destino: "Birigui", saida: "15/04/2026 xx:xx", chegada: "15/04/2026 yy:yy"},
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
            destino: "Birigui", saida: "24/04/2026 xx:xx", estimada: "24/04/2026 yy:yy", agendamento: "1"},
        {motorista: "Beto", veiculo: "carro2", motivo: "Motivo X",
            destino: "Birigui", saida: "23/04/2026 xx:xx", estimada: "23/04/2026 yy:yy", agendamento: "1"},
        {motorista: "Carlos", veiculo: "carro3", motivo: "Motivo X",
            destino: "Birigui", saida: "22/04/2026 xx:xx", estimada: "22/04/2026 yy:yy", agendamento: "1"},
        {motorista: "Douglas", veiculo: "carro4", motivo: "Motivo X",
            destino: "Birigui", saida: "21/04/2026 xx:xx", estimada: "21/04/2026 yy:yy",agendamento: "1"},
        {motorista: "Eduardo", veiculo: "carro5", motivo: "Motivo X",
            destino: "Birigui", saida: "20/04/2026 xx:xx", estimada: "23/04/2026 yy:yy", agendamento: "1"},
        {motorista: "Fabio", veiculo: "carro6", motivo: "Motivo X",
            destino: "Birigui", saida: "19/04/2026 xx:xx", estimada: "19/04/2026 yy:yy", agendamento: "1"},
        {motorista: "Gustavo", veiculo: "carro7", motivo: "Motivo X",
            destino: "Birigui", saida: "18/04/2026 xx:xx", estimada: "20/04/2026 yy:yy", agendamento: "1"},
        {motorista: "Henrique", veiculo: "carro8", motivo: "Motivo X",
            destino: "Birigui", saida: "17/04/2026 xx:xx", estimada: "17/04/2026 yy:yy", agendamento: "1"},
        {motorista: "Igor", veiculo: "carro9", motivo: "Motivo X",
            destino: "Birigui", saida: "16/04/2026 xx:xx", estimada: "16/04/2026 yy:yy", agendamento: "1"},
        {motorista: "Jonas", veiculo: "carro10", motivo: "Motivo X",
            destino: "Birigui", saida: "15/04/2026 xx:xx", estimada: "15/04/2026 yy:yy", agendamento: "1"},
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
                                    <th>Motivo</th>
                                    <th>Destino</th>
                                    <th>Saída</th>
                                    <th>Chegada</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registroUltimos10.map((reg) => (
                                    <tr>
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