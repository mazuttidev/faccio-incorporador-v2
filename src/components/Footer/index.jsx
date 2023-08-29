import React from "react";
import "./style.css"
import { BsChevronCompactUp } from "react-icons/bs"

export const Footer = () => {
    return (
        <footer>
            <div className="d-block">
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                <h2>FACCIO CONTRUTORA</h2>
                <p>endereco</p>
                <div className="d-grid">
                    <h2>Acesso Rápido</h2>
                    <a>VICTOR MAZUTTI</a>
                    <a>VICTOR MAZUTTI</a>
                    <a>VICTOR MAZUTTI</a>
                    <a>VICTOR MAZUTTI</a>
                    <a>VICTOR MAZUTTI</a>
                </div>
            </div>
            <div className="copy d-flex">
                <p>Todos direitos reservados</p>
                <span>VICTOR MAZUTTI</span>
            </div>
            <a href="#top">
               <span> <BsChevronCompactUp /> </span> 
               <span>Voltar ao Topo</span>
            </a>
        </footer>
    )
}