import "./Popup.css";

export default function Popup({
    aberto,
    movimento,
    onConfirmar,
    onCancelar
}) {
    if (!aberto || !movimento) return null;

    const formatarData = (iso) =>
        iso
            ? new Date(iso).toLocaleString("pt-BR", {
                  dateStyle: "short",
                  timeStyle: "short",
              })
            : "—";

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <h2>Agendamento de Saída</h2>

                <div className="popup-info">
                    <p>
                        <strong>Motorista:</strong>{" "}
                        {movimento.motorista?.nome}
                    </p>

                    <p>
                        <strong>Veículo:</strong>{" "}
                        {movimento.veiculo?.modelo} —{" "}
                        {movimento.veiculo?.placa}
                    </p>

                    <p>
                        <strong>Motivo:</strong>{" "}
                        {movimento.motivo?.motivo}
                    </p>

                    <p>
                        <strong>Destino:</strong>{" "}
                        {movimento.destino}
                    </p>

                    <p>
                        <strong>Horário previsto:</strong>{" "}
                        {formatarData(movimento.saida)}
                    </p>
                </div>

                <div className="popup-message">
                    A saída aconteceu?
                </div>

                <div className="popup-buttons">
                    <button
                        className="popup-btn-confirmar"
                        onClick={() => onConfirmar(movimento)}
                    >
                        Confirmar
                    </button>

                    <button
                        className="popup-btn-cancelar"
                        onClick={() => onCancelar(movimento)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}