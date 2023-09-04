import React from "react";
import { TbTarget } from "react-icons/tb";
import { ImKey } from "react-icons/im";
import { MdHeadset } from "react-icons/md";

export const Principlas = () => {
    return (
        <>
            <div className="d-block mg-bot-40">
                <div className="d-flex jc-evenly">
                    <div className="d-block col-2">
                        <span className="span-icon"><TbTarget /></span>
                        <h2 className="h2-mission">Imóveis projetados para o seu conforto</h2>
                        <p className="p-mission">Nossos projetos são desenvolvidos por arquitetos e engenheiros extremamente capacitados a proporcionar o maior conforto para o seu dia a dia.</p>
                    </div>
                    <div className="d-block col-2">
                        <span className="span-icon"><ImKey /></span>
                        <h2 className="h2-mission">Compromisso como prazo de entrega</h2>
                        <p className="p-mission">Prezamos sempre pela melhor relação com nossos clientes, e uma das premissas para isso é cumprir com os prazos prometidos para a entrega de nossos empreendimentos.</p>
                    </div>
                    <div className="d-block col-2">
                        <span className="span-icon"><MdHeadset /></span>
                        <h2 className="h2-mission">Atendimento exclusivo, ambientes personalizados</h2>
                        <p className="p-mission">Permitimos customizar os ambientes internos dos imóveis, desde a posição das paredes até os acabamentos mais refinados, deixando o imóvel do cliente de acordo com o seu gosto.</p>
                    </div>
                </div>
            </div>
            <div className="al-center-button mg-0 pd-top-14">
                <button className="button-intro" type="button">LER MAIS</button>
            </div>
        </>
    )
}