import React, { useState } from "react";
import './style.css'

import imgInterno from "../../img/img-interno.jpg"
import imgExterno from "../../img/image-externo.jpg"

export const Card = () => {

    var nomeEdificio = 'teste'
    var bairro = 'teste2'
    var outra = 'teste2'
    var href = '#'
    var flag = 'NEW'

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="card-section">
            <a href={{ href }} className="image-card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="flag">{flag}</span>
                <img
                    className='hovered'
                    src={isHovered ? imgInterno  :  imgExterno }
                    alt="Imagem interna do edifício"
                />
            </a>
            <div className="d-flex jc-between">
                <div className="font-family-gill">
                    <p>{nomeEdificio}</p>
                    <p>{bairro}</p>
                </div>
                <div>
                    <p className="font-family-gill">{outra}</p>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}