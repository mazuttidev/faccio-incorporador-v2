import React, { useState } from "react";
import './style.css'

export const Card = ({nomeEdificio, locate, addInfo, href, flag, imgExterno, imgInterno }) => {

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
                    <p>{locate}</p>
                </div>
                <div>
                    <p className="font-family-gill">{addInfo}</p>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}