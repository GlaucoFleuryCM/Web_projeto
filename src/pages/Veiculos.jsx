import React from "react";
import { useState } from "react"; // searchbar
import EmblaCarousel from "./carrousel/EmblaCarousel";
import './carrousel/embla.css'
import caminhao from "../assets/caminhao.jpg";
import motoca from "../assets/motoca.jpg";
import caminhonete from "../assets/caminhonete.jpg";
import './Veiculos.css';

const Veiculos = () => {
    const [search, setSearch] = useState("");
    const OPTIONS = {}
    const SLIDES = [
        {
            img: caminhao,
            info: "Caminhao do Ronaldo; boas condições",
            status: "Disponível",
            motorista: "---",
            placa: "BRA2E19"
        },
        {
            img: motoca,
            info: "Moto da firma; um tanto danifica",
            status: "Indisponível",
            motorista: "Maria da Silva Lourdes",
            placa: "NEGOI50"
        },
        {
            img: caminhonete,
            info: "Caminhonete do Patrão; muito potente",
            status: "Disponível",
            motorista: "---",
            placa: "FBJ4E12"
        }
    ];
    // What user wats to see: gfilter by 'placa'
    const filteredSlides = SLIDES.filter((slide) =>
    slide.placa.toLowerCase().includes(search.toLowerCase())
    );
    // Wrapper for error (same logic as the error in login)
    return (
        <div className="carousel-wrapper">
        <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
        />

        <EmblaCarousel slides={filteredSlides} options={OPTIONS} />
        </div>
    );
};

export default Veiculos;