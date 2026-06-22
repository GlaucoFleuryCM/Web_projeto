import "./RegSaida.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import api from "../../services/api";

const Saida = () => {
    const [saidaManual, setSaidaManual] = useState(false);
    const [formData, setFormData] = useState({
        veiculo: "",
        motorista: "",
        motivo: "",
        destino: "",
        retornoEstimado: new Date(),
        saida: new Date(),
    });

    const [motoristas, setMotoristas] = useState([]);
    const [veiculos, setVeiculos] = useState([]);
    const [motivos, setMotivos] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const carregar = async () => {
            try {
                const [m, v, mo] = await Promise.all([
                    api.get('/motoristas'),
                    api.get('/veiculos'),
                    api.get('/motivos'),
                ]);
                setMotoristas(m.data);
                setVeiculos(v.data.filter(v => v.status === 'Disponível'));
                setMotivos(mo.data);
            } catch {
                setErro("Erro ao carregar dados. Verifique a conexão com o servidor.");
            }
        };
        carregar();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro("");
        setLoading(true);

        try {
            await api.post('/movimentos', {
                veiculo: formData.veiculo,
                motorista: formData.motorista,
                motivo: formData.motivo,
                destino: formData.destino,
                saida: formData.saida.toISOString(),
                retornoEstimado: formData.retornoEstimado.toISOString(),
            });

            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);

            setFormData({
                veiculo: "",
                motorista: "",
                motivo: "",
                destino: "",
                retornoEstimado: new Date(),
                saida: new Date(),
            });
            setSaidaManual(false);

            // Recarregar veículos disponíveis
            const { data } = await api.get('/veiculos');
            setVeiculos(data.filter(v => v.status === 'Disponível'));
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao registrar saída.");
        } finally {
            setLoading(false);
        }
    };

    const veiculoSelecionado = veiculos.find(v => v._id === formData.veiculo);

    return (
        <div className="saida">
            <h1 className="page-title">Registrar Saída de Veículo</h1>

            {erro && <div className="error-message" style={{ marginBottom: "1rem" }}>{erro}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Veículo:</label>
                    <select className="form-field" name="veiculo" required
                        value={formData.veiculo} onChange={handleChange}>
                        <option value="">Escolha um veículo</option>
                        {veiculos.map((v) => (
                            <option key={v._id} value={v._id}>
                                {v.modelo} — {v.placa}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Motorista:</label>
                    <select className="form-field" name="motorista" required
                        value={formData.motorista} onChange={handleChange}>
                        <option value="">Escolha um motorista</option>
                        {motoristas.map((m) => (
                            <option key={m._id} value={m._id}>{m.nome}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Motivo:</label>
                    <select className="form-field" name="motivo" required
                        value={formData.motivo} onChange={handleChange}>
                        <option value="">Escolha um motivo</option>
                        {motivos.map((m) => (
                            <option key={m._id} value={m._id}>{m.motivo}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Destino da viagem:</label>
                    <input type="text" placeholder="Digite o destino" className="form-field"
                        name="destino" value={formData.destino} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Estimativa de retorno:</label>
                    <DatePicker
                        selected={formData.retornoEstimado}
                        onChange={(date) => setFormData((p) => ({ ...p, retornoEstimado: date }))}
                        showTimeSelect timeFormat="HH:mm" timeIntervals={15}
                        dateFormat="dd/MM/yyyy HH:mm" minDate={new Date()} className="form-field"
                    />
                </div>

                <div className="form-group">
                    <label>
                        <input className="check-box" type="checkbox" checked={saidaManual}
                            onChange={(e) => {
                                setSaidaManual(e.target.checked);
                                if (!e.target.checked) {
                                    const now = new Date();
                                    now.setSeconds(0, 0);
                                    setFormData((p) => ({ ...p, saida: now }));
                                }
                            }}
                        />
                        Agendar Saída
                    </label>

                    {!saidaManual ? (
                        <div className="form-group">
                            <span className="saida">Saída: {formData.saida.toLocaleString()}</span>
                        </div>
                    ) : (
                        <div className="form-group">
                            <label>Saída:</label>
                            <DatePicker
                                selected={formData.saida}
                                onChange={(date) => setFormData((p) => ({ ...p, saida: date }))}
                                showTimeSelect timeFormat="HH:mm" timeIntervals={15}
                                dateFormat="dd/MM/yyyy HH:mm" minDate={new Date()} className="form-field"
                            />
                        </div>
                    )}
                </div>

                <button type="submit" className="submit" disabled={loading}>
                    {loading ? "Registrando..." : "Registrar Saída"}
                </button>
            </form>

            {showMessage && (
                <div className="toast-success">
                    <div className="toast-icon">✓</div>
                    <div>
                        <span className="saida-info">Saída registrada</span>
                        <p>{veiculoSelecionado ? `${veiculoSelecionado.modelo} — ${veiculoSelecionado.placa}` : ""}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Saida;
