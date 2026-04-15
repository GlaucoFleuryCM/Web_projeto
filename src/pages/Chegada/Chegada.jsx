import "./RegSaida.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Saida = () => {
    const [formData, setFormData] = useState({
        veiculo: "",
        motorista: "",
        motivo: "",
        retorno: new Date(),
        saida: new Date(),
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prev) => ({
            ...prev,
            retorno: date
        }));
    };
    
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Dados enviados:", formData);

        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000)
    };


    return (
        <div className="saida">
            <h1 className="page-title">Registrar Saída de Veículo</h1>

            <form onSubmit={handleSubmit}>

                
                <div className="form-group">
                    <label>Data de retorno:</label>
                    <DatePicker
                        id="retorno"
                        selected={formData.retorno}
                        onChange={handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="dd/MM/yyyy HH:mm"
                        minDate={new Date()}
                        className="form-field"
                    />
                </div>

                <div className="form-group">
                    <label>Odômetro:</label>
                    <input 
                        type="number"
                        placeholder="Quilometragem atual"
                        className="form-field" required
                        id="odometro"></input>
                </div>

                <div className="form-group">
                    <label>Observacoes:</label>
                    <input
                        type="text"
                        placeholder="Digite observações adicionais..."
                        className="form-field" 
                        id="obs"
                    >
                    </input>
                </div>

                <button type="submit" className="submit">Registrar Retorno</button>
            </form>
                
            {showMessage && (
                <span className="success-message">
                    Registro Concluído Com Sucesso
                </span>
            )}
        </div>

    );
};

export default Saida;