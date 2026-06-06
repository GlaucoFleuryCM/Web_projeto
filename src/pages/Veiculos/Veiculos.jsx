import React from "react";
import { useState } from "react"; // searchbar

import EmblaCarousel from "../../components/Carrousel/EmblaCarousel";
import '../../components/Carrousel/embla.css'
import caminhao from "../../assets/caminhao.jpg";
import motoca from "../../assets/motoca.jpg";
import caminhonete from "../../assets/caminhonete.jpg";
import './Veiculos.css';

const Veiculos = () => {
    const [search, setSearch] = useState("");
    const OPTIONS = {}
    const SLIDES = [
        {
            img: caminhao,
            info: "Caminhao do Ronaldo; boas condições",
            status: "Manutenção",
            motorista: "---",
            modelo: "CAMINHÃO",
            placa: "BRA2E19"
        },
        {
            img: motoca,
            info: "Moto da firma; um tanto danifica",
            status: "Em uso",
            motorista: "Maria da Silva Lourdes",
            modelo: "MOTO",
            placa: "NEGOI50"
        },
        {
            img: caminhonete,
            info: "Caminhonete do Patrão; muito potente",
            status: "Disponível",
            motorista: "---",
            modelo: "CAMINHONETE",
            placa: "FBJ4E12"
        }
    ];
    
    // What user wats to see: gfilter by 'placa'
    const filteredSlides = SLIDES.filter((slide) =>
        slide.placa.toLowerCase().includes(search.toLowerCase())
    );

    const statusOrder = {
        "Em uso": 1,
        "Manutenção": 2,
        "Disponível": 3
    };

    const sortedAndFilteredSlides = filteredSlides.sort((a, b) => {
        const orderA = statusOrder[a.status] || 4;
        const orderB = statusOrder[b.status] || 4;
        return orderA - orderB;
    });

    // Wrapper for error (same logic as the error in login)
    return (
        <div className="carousel-wrapper">
            <div className= "search-container">
                <input
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-bar"
                />
                
                <div className="tooltip-container">
                    <span className="tooltip-icon">?</span>
                    <span className="tooltip-text">
                        Você pode pesquisar pela placa do veículo.
                    </span>
                </div>
            </div>

            <EmblaCarousel slides={filteredSlides} options={OPTIONS} />
        </div>
    );
};

export default Veiculos;