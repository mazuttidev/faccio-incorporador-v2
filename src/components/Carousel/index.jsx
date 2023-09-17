import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import holder from "./holder.jpg";
import { Indicador } from "./indicador";
// props para preencher o carrousel 
export const Carousel = ({ title, content, footer, }) => {

    
    // provisorio
    const slides = [
        { id: 1, titulo: "primeiro", content:" conteudo do slide 1" },
        { id: 2, titulo: "segundo", content:" conteudo do slide 2" },
        { id: 3, titulo: "terceiro", content:" conteudo do slide 3" },
        { id: 4, titulo: "quarto", content:" conteudo do slide 4" },
    ];
    const [selected, setSelected] = useState(slides[0])
    
    const handleSlide = (tipo) => {
        let indexSlide = slides.findIndex((slide) => slide.id === selected.id)
        if (tipo.next) {
            
            if (indexSlide < slides.length - 1) {
                setSelected(slides[indexSlide + 1])
            }
        } else {
            if (indexSlide > 0) {
                setSelected(slides[indexSlide - 1])
            }
        }
    }


    return (
        <>
            <div className="container">

                <div className="carousel-main">
                    <div className="div-setas">
                        <div onClick={() => handleSlide({next:false})} className="setinha-esquerda" />
                    </div>

                    <div className="courosel-content">
                        <div className="carousel-background">
                            <img src={holder} alt="backgorund-img" />
                        </div>
                        <div className="content-container">
                            <div className="content">
                                {/* talvez criar componentes para cada parte para poder pesonalizar mais tarde */}
                                {selected && (
                                    <>
                                <div className="carousel-title">
                                     {selected.titulo}
                                 </div>
 
                                 <div className="carousel-description">
                                     {selected.content}
                                 </div>
 
                                 <div className="carousel-footer">
                                     {footer()}
                                 </div>
                                    </>
                                )}
                               

                            </div>
                        </div>

                    </div>

                    <div className="div-setas">
                        <div onClick={() => handleSlide({next:true})} className="setinha-direita" />
                    </div>
                </div>

                <div className="carousel-navegation">
                    {/* looping na quantidade de slide */}
                    {slides.map((slide) => {
                        return (
                            <Indicador setSelected={setSelected} selected={selected} slide={slide} />

                        )
                    })}
                </div>
            </div>
        </>
    )
}