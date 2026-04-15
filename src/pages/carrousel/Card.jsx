import React from "react";

const Card = ({ data }) => {
    return (
        <div className="card">
            <img src={data.img} alt="Veiculo" className="vehicle-image" />

            <div className="card-text">
                <p><strong>Informação:</strong> {data.info}</p>
                <p><strong>Status:</strong> {data.status}</p>
                <p><strong>Motorista:</strong> {data.motorista}</p>
                <p><strong>Veículo:</strong> {data.placa}</p>
            </div>
        </div>
    );
};

export default Card;