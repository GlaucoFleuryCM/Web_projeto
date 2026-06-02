import React from "react";

const Card = ({ data }) => {
    return (
        <div className="card">
            <img src={data.img} alt="Veículo" className="vehicle-image" />

            <div className="card-text">
                <p><strong>Informação:</strong> {data.info}</p>
                <p><strong>Status:</strong> {data.status}</p>
                <p><strong>Motorista:</strong> {data.motorista}</p>
                <p><strong>Modelo:</strong> {data.modelo}</p>
                <p><strong>Placa:</strong> {data.placa}</p>
            </div>
        </div>
    );
};

export default Card;