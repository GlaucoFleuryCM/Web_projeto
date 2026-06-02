import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "./Chegada.css";

export default function Chegada({aberto, registro, onClose, onFinalizar}) {

    const [dataChegada, setDataChegada] = useState(new Date());
    const [odometro, setOdometro] = useState("");
    const [observacoes, setObservacoes] = useState("");

    useEffect(() => {
        if (aberto) {
            setDataChegada(new Date());
            setOdometro("");
            setObservacoes("");
        }
    }, [aberto]);

    if (!aberto || !registro) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        onFinalizar({
            ...registro,
            dataChegada,
            odometro,
            observacoes
        });
    };

    return (
        <div className="modal-overlay">
            <form className="form" onSubmit={handleSubmit}>

                <button
                    type="button"
                    className="btn-cancelar"
                    onClick={onClose}
                >
                    X
                </button>

                <h2>Finalizar Retorno</h2>

                <div className="form-group">
                    <label>
                        Motorista:
                        <span className="fixed">
                            {registro.motorista}
                        </span>
                    </label>

                    <label>
                        Veículo:
                        <span className="fixed">
                            {registro.veiculo}
                        </span>
                    </label>

                    <label>
                        Motivo:
                        <span className="fixed">
                            {registro.motivo}
                        </span>
                    </label>

                    <label>
                        Data de saída:
                        <span className="fixed">
                            {registro.saida}
                        </span>
                    </label>

                    <label>
                        Último Valor do Odômetro:
                        <span className="fixed">
                            110.710
                        </span>
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
                        rows={3}
                        value={observacoes}
                        onChange={(e) =>
                            setObservacoes(e.target.value)
                        }
                    />
                </div>

                <button className="submit" type="submit">
                    Finalizar retorno
                </button>

            </form>
        </div>
    );
}