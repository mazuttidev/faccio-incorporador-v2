import React, { useState } from "react";
import './style.css'
import {FiMapPin} from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

export const CardFull = ({href, imgSrc, edName, descEdificio, locate}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <div>
                <a href={href} class="card-empreendimentos"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <div class="card-image-empreendimentos-left">
                        <img src={imgSrc} alt="Imagem do segundo card"></img>
                    </div>
                    <div class="card-text-empreendimentos-right">
                        <h2>{edName}</h2>
                        <p>{descEdificio}.</p>
                        <p className={isHovered ? 'none' : 'locate'}><FiMapPin/>{locate}</p>
                        <div className={isHovered ? 'active' : 'none'}> Conhecer Mais <AiOutlinePlus/></div>
                    </div>
                </a>
            </div>
    )
}