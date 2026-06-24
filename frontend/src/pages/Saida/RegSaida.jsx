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

    const [textoToast, setTextoToast] = useState(""); 
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
                setMotoristas(m.data.filter(item => item.status === 'Disponível'));
                setVeiculos(v.data.filter(item => item.status === 'Disponível'));
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

        const vSel = veiculos.find(v => v._id === formData.veiculo);
        if (vSel) {
            setTextoToast(`${vSel.modelo} — ${vSel.placa}`);
        }

        const payload = {
            veiculo: formData.veiculo,
            motorista: formData.motorista,
            motivo: formData.motivo, 
            destino: formData.destino.trim() || "", 
            saida: formData.saida.toISOString(),
            retornoEstimado: formData.retornoEstimado.toISOString(),
            agendado: saidaManual,
        };

        try {
            await api.post('/movimentos', payload);

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
            
            const respV = await api.get('/veiculos');
            setVeiculos(respV.data.filter(v => v.status === 'Disponível'));

            const respM = await api.get('/motoristas');
            setMotoristas(respM.data.filter(m => m.status === 'Disponível'));

        } catch (err) {
            console.error("Erro completo da requisição:", err.response);
            setErro(err.response?.data?.message || "Erro ao registrar saída no servidor.");
        } finally {
            setLoading(false);
        }
    };

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
                    <label>Destino da viagem <span style={{ fontWeight: "normal", fontSize: "0.9em", opacity: 0.7 }}>(Opcional)</span>:</label>
                    <input type="text" placeholder="Digite o destino" className="form-field"
                        name="destino" value={formData.destino} onChange={handleChange}/>
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
                        <p>{textoToast}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Saida;