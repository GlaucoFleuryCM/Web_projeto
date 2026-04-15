import "./RegSaida.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Saida = () => {
    const [saidaManual, setSaidaManual] = useState(false);

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
                    <label>Veículo:</label>
                    <select 
                        className="form-field"
                        id="veiculo" name="veiculo" required
                        value={formData.veiculo} onChange={handleChange}
                    >
                        <option value="">Escolha um veículo</option>
                        <option value="veiculo1">Veículo 1</option>
                        <option value="veiculo2">Veículo 2</option>
                        <option value="veiculo3">Veículo 3</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Motorista:</label>
                    <select 
                        className="form-field"
                        id="motorista" name="motorista" required
                        value={formData.motorista} onChange={handleChange}
                    >
                        <option value="">Escolha um Motorista</option>
                        <option value="motorista1">Motorista 1</option>
                        <option value="motorista2">Motorista 2</option>
                        <option value="motorista3">Motorista 3</option>
                    </select>
                </div>

                <div className="form-group">
                <label>Motivo:</label>
                    <select
                        className="form-field"
                        id="motivo" name="motivo" required
                        value={formData.motivo} onChange={handleChange}
                    >
                        <option value="">Escolha um Motivo</option>
                        <option value="motivo1">Motivo 1</option>
                        <option value="motivo2">Motivo 2</option>
                        <option value="motivo3">Motivo 3</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Destino da viagem</label>
                    <input
                        type="text"
                        placeholder="Digite o destino"
                        className="form-field"
                        id="destino" name="destino"
                    ></input>
                </div>

                <div className="form-group">
                    <label>Estimativa de retorno:</label>
                    <DatePicker
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
                    <label>
                        <input
                            className="check-box"
                            type="checkbox"
                            checked={saidaManual}
                            onChange={(e) => {
                                setSaidaManual(e.target.checked);
                                
                                if (!e.target.checked) {
                                    const now = new Date();
                                    now.setSeconds(0, 0);
                                    setFormData((prev) => ({
                                        ...prev,
                                        saida: now
                                    }));
                                }
                            }}
                        />
                        Agendar Saída
                    </label>

                    {!saidaManual ? (
                        <div className="form-group">
                            <span>
                                Saída: {formData.saida.toLocaleString()}
                            </span>
                        </div>
                    ) : (    <div className="form-group">
                            <label>Saída:</label>

                            <DatePicker
                                selected={formData.saida}
                                onChange={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        saida: date
                                    }))
                                }
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="dd/MM/yyyy HH:mm"
                                minDate={new Date()}
                                className="form-field"
                            />
                        </div>
                    )}
                </div>

                <button type="submit" className="submit">Registrar Saída</button>
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