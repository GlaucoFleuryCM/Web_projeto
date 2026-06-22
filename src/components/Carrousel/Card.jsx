import React from "react";
import './card.css';

const placeholderImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23999'%3ESem imagem%3C/text%3E%3C/svg%3E";

const Card = ({ data, onToggleManutencao }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Disponível': return 'status-disponivel';
            case 'Indisponível':
            case 'Em uso': return 'status-em-uso';
            case 'Manutenção': return 'status-manutencao';
            default: return 'status-padrao';
        }
    };

    const podeAlterarManutencao = data.status !== 'Em uso';
    const labelBotao = data.status === 'Manutenção' ? 'Marcar Disponível' : 'Manutenção';

    return (
        <div className="card">
            <div className={`status-badge ${getStatusClass(data.status)}`}>
                <span className="status-dot"></span>
                <span className="status-text">{data.status}</span>
                <span className="status-dot"></span>
            </div>

            <img src={data.img || placeholderImg} alt="Veículo" className="vehicle-image" />

            <div className="card-text">
                <p>{data.info}</p>
                <p><strong>Motorista:</strong> {data.motorista}</p>
                <p><strong>Modelo:</strong> {data.modelo}</p>
                <p><strong>Placa:</strong> {data.placa}</p>
                {data.odometro != null && (
                    <p><strong>Odômetro:</strong> {data.odometro.toLocaleString()} km</p>
                )}
            </div>

            {podeAlterarManutencao && onToggleManutencao && (
                <button
                    className="btn-manutencao"
                    onClick={() => onToggleManutencao(data)}
                >
                    {labelBotao}
                </button>
            )}
        </div>
    );
};

export default Card;
