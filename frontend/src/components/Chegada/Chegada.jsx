import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "./Chegada.css";

export default function Chegada({ aberto, registro, onClose, onFinalizar }) {
    const [dataChegada, setDataChegada] = useState(new Date());
    const [odometro, setOdometro] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [loading, setLoading] = useState(false);
    const [erroData, setErroData] = useState(""); 

    useEffect(() => {
        if (aberto) {
            setDataChegada(new Date());
            setOdometro(registro?.odometroSaida ?? "");
            setObservacoes("");
            setErroData("");
        }
    }, [aberto, registro]);

    if (!aberto || !registro) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErroData("");

        const agora = new Date();
        const dataSaida = new Date(registro.saida);

        if (dataChegada < dataSaida) {
            setErroData("A data/hora de chegada não pode ser menor que a data de saída.");
            return;
        }

        if (dataChegada > agora) {
            setErroData("A data/hora de chegada não pode ser maior que o horário atual.");
            return;
        }

        setLoading(true);
        try {
            await onFinalizar({ dataChegada, odometro, observacoes });
        } finally {
            setLoading(false);
        }
    };

    const formatarData = (iso) =>
        iso ? new Date(iso).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : "—";

    return (
        <div className="modal-overlay">
            <form className="form" onSubmit={handleSubmit}>
                <button type="button" className="btn-cancelar" onClick={onClose}>X</button>

                <h2>Finalizar Retorno</h2>

                {erroData && <div className="error-message" style={{ color: "red", marginBottom: "1rem", fontSize: "0.9em" }}>{erroData}</div>}

                <div className="form-group">
                    <label>
                        Motorista:
                        <span className="fixed">{registro.motorista?.nome}</span>
                    </label>
                    <label>
                        Veículo:
                        <span className="fixed">{registro.veiculo?.modelo} — {registro.veiculo?.placa}</span>
                    </label>
                    <label>
                        Motivo:
                        <span className="fixed">{registro.motivo?.motivo}</span>
                    </label>
                    <label>
                        Data de saída:
                        <span className="fixed">{formatarData(registro.saida)}</span>
                    </label>
                    <label>
                        Último Odômetro:
                        <span className="fixed">{registro.odometroSaida?.toLocaleString() ?? "—"} km</span>
                    </label>
                </div>

                <div className="form-group">
                    <label>Data de chegada:</label>
                    <DatePicker
                        selected={dataChegada}
                        onChange={setDataChegada}
                        showTimeSelect 
                        timeFormat="HH:mm" 
                        timeIntervals={15}
                        dateFormat="dd/MM/yyyy HH:mm" 
                        className="form-field"
                        minDate={new Date(registro.saida)}
                        maxDate={new Date()}
                    />
                </div>

                <div className="form-group">
                    <label>Odômetro (km):</label>
                    <input className="form-field" type="number" required
                        min={registro.odometroSaida ?? 0}
                        value={odometro}
                        onChange={(e) => setOdometro(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Observações:</label>
                    <textarea className="form-field" rows={3}
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                    />
                </div>

                <button className="submit" type="submit" disabled={loading}>
                    {loading ? "Salvando..." : "Finalizar retorno"}
                </button>
            </form>
        </div>
    );
}