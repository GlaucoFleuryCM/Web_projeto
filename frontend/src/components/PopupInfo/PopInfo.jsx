import "./PopInfo.css";

export default function PopupInfo({aberto, titulo, dados, onClose}) {
    if (!aberto) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <h2>{titulo}</h2>

                <div className="popup-info">
                    {dados.map((campo) => (
                        <p key={campo.label}>
                            <strong>{campo.label}:</strong> {campo.valor || "—"}
                        </p>
                    ))}
                </div>

                <div className="popup-buttons">
                    <button
                        className="popup-btn-confirmar"
                        onClick={onClose}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}