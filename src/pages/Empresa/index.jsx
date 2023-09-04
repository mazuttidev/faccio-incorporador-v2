import React from "react";
import "./style.css"
import { ContactInfo } from "../../components/ContactInfo";
import { BsArrowRight } from "react-icons/bs";
import { Principlas } from "../../components/Principals";

export const Empresa = () => {
    return (
        <div className="container">
            <div className="image-empresa">
                <img className="" src="https://picsum.photos/id/237/1000/1000" />
                <h2 className="p-absolute txt-h2-about">A Faccio Construtora</h2>
            </div>

            <div className="d-flex pd-30 mg-top-60">
                <div className="txt-about mg-r-15 col-6">
                    <h2>Lema da Empresa aqui</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores quibusdam a ad fuga eos repudiandae cum doloremque ea est sequi magnam quod maxime, esse consequuntur mollitia totam ullam consequatur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores quibusdam a ad fuga eos repudiandae cum doloremque ea est sequi magnam quod maxime, esse consequuntur mollitia totam ullam consequatur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores quibusdam a ad fuga eos repudiandae cum doloremque ea est sequi magnam quod maxime, esse consequuntur mollitia totam ullam consequatur?</p>
                </div>
                <div className="image-about col-6">
                    <img src="https://picsum.photos/id/217/600/500" alt="" />
                </div>
            </div>
            <div className="maps p-relative">
                <div className="mapa"></div>
                <div className="send-to-map p-absolute">
                    <h2 className="txt-al-center ">Onde estamos?</h2>
                    <p className="endereco-maps txt-al-center font-family-minion">R. Fábio Salton Marodin, 95, apto 501, Bento Gonçalves/RS</p>
                    <div className="d-flex jc-center">
                        <a href="https://www.google.com/maps/place//@-29.4566953,-51.9668607,17z/data=!3m1!4b1?entry=ttu" target="_blank" rel="noopener noreferrer" className="button-intro txt-al-center jc-center">Ver no Mapa <span className="txt-al-center"> <BsArrowRight /> </span></a>
                    </div>
                </div>
            </div>
            <div className="home-text-mission change-colors">
                <Principlas />
            </div>
            <ContactInfo />
        </div>
    )
}