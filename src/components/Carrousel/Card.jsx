import React from "react";
import './card.css';

const Card = ({ data }) => {
    const getStatusClass = (status) => {
    switch (status) {
      case 'Disponível':
        return 'status-disponivel';
      case 'Indisponível':
      case 'Em uso':
        return 'status-em-uso';
      case 'Manutenção':
        return 'status-manutencao';
      default:
        return 'status-padrao'; // Cor azul original que você já tem
    }
  };

    return (
        <div className="card">
            <div className={`status-badge ${getStatusClass(data.status)}`}>
              <span className="status-dot"></span>
              <span className="status-text">{data.status}</span>
              <span className="status-dot"></span>
            </div>

            <img src={data.img} alt="Veículo" className="vehicle-image" />

            <div className="card-text">
              <p>{data.info}</p>
              <p><strong>Motorista:</strong> {data.motorista}</p>
              <p><strong>Modelo:</strong> {data.modelo}</p>
              <p><strong>Placa:</strong> {data.placa}</p>
            </div>

            <button className="btn-manutencao"> Manutenção </button>
        </div>
    );
};

export default Card;