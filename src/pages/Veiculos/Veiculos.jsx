import React, { useState, useEffect } from "react";
import EmblaCarousel from "../../components/Carrousel/EmblaCarousel";
import '../../components/Carrousel/embla.css';
import './Veiculos.css';
import api, { UPLOADS_URL } from "../../services/api";

const Veiculos = () => {
    const [search, setSearch] = useState("");
    const [veiculos, setVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState("");

    const carregarVeiculos = async () => {
        setErro("");
        try {
            const { data } = await api.get('/veiculos');
            setVeiculos(data);
        } catch {
            setErro("Erro ao carregar veículos.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        carregarVeiculos();
    }, []);

    const toggleManutencao = async (veiculo) => {
        const novoStatus = veiculo.status === 'Manutenção' ? 'Disponível' : 'Manutenção';
        try {
            const { data } = await api.patch(`/veiculos/${veiculo._id}/status`, { status: novoStatus });
            setVeiculos((prev) => prev.map((v) => v._id === data._id ? { ...v, status: data.status } : v));
        } catch (err) {
            alert(err.response?.data?.message || "Erro ao atualizar status.");
        }
    };

    const toSlide = (v) => ({
        _id: v._id,
        img: v.img ? `${UPLOADS_URL}${v.img}` : null,
        info: [v.modelo, v.ano].filter(Boolean).join(' — '),
        status: v.status,
        motorista: v.motoristaAtual || "---",
        modelo: v.modelo,
        placa: v.placa,
        odometro: v.odometro,
    });

    const statusOrder = { "Em uso": 1, "Manutenção": 2, "Disponível": 3, "Indisponível": 4 };

    const slides = veiculos
        .filter((v) => v.placa.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => (statusOrder[a.status] || 5) - (statusOrder[b.status] || 5))
        .map(toSlide);

    return (
        <div className="carousel-wrapper">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar pela placa"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-bar"
                />
                <div className="tooltip-container">
                    <span className="tooltip-icon">?</span>
                    <span className="tooltip-text">Você pode pesquisar pela placa do veículo.</span>
                </div>
            </div>

            {loading && <p style={{ textAlign: "center", marginTop: "2rem" }}>Carregando veículos...</p>}
            {erro && <p style={{ color: "red", textAlign: "center" }}>{erro}</p>}
            {!loading && !erro && slides.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "2rem" }}>Nenhum veículo encontrado.</p>
            )}

            {!loading && slides.length > 0 && (
                <EmblaCarousel slides={slides} options={{}} onToggleManutencao={toggleManutencao} />
            )}
        </div>
    );
};

export default Veiculos;
