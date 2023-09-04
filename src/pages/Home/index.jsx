import React from "react";
import './style.css'

import introImg from './esplendore.jpg'
import { Card } from "../../components/Card";
import { ContactInfo } from "../../components/ContactInfo";
import { Principlas } from "../../components/Principals";



export const Home = () => {
    //https://picsum.photos/id/237/1000/1000
    return (
        <div className="container">
            <div className="d-flex intro">
                <div className="intro-image">
                    <img className="" src={introImg}></img>
                </div>
                <div className="intro-text">
                    <div className="intro-text-content">
                        <a className="link-font" href="">
                            <h3>SOMENTE NA FACCIO CONTRUTORA</h3>
                            <p className="al-left">SOMENTE NA FACCIO CONTRUTORA SOMENTE NA FACCIO CONTRUTORA SOMENTE NA FACCIO CONTRUTORA SOMENTE NA FACCIO CONTRUTORA</p>
                            <p className="al-left">12 de Agosto, 2023</p>
                        </a>
                        <button className="button-intro" type="button">VEJA MAIS</button>
                    </div>
                </div>
            </div>
            <div className="home-text">
                <div className="d-block">
                    <p className="mg-0 pd-20">"Uma casa é muito mais que quatro paredes e um teto. É onde a vida acontece e as memórias são feitas." - Barbara Corcoran</p>
                </div>
                <div className="al-center-button">
                    <button className="button-intro" type="button">ENCONTRE SEU LAR</button>
                </div>
            </div>
            <div className="full-screen">
                <div className="triangulo"></div>
            </div>
            <section name="card-group" className="bg-color-primary p-relative">
                <div className="d-flex center">
                    <div className="d-flex header">
                        <h3 className="">EM DESTAQUE</h3>
                    </div>
                </div>
                <div className="d-flex header">
                    <div className="end">
                        <button className="button-intro" type="button">CONHEÇA TUDO</button>
                    </div>
                </div>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    {/* <Card />
                    <Card />
                    <Card /> */}
                </div>
            </section>
            <div className="home-text-mission change-colors">
                <Principlas />
            </div>
            <div className="triangulo-reverso"></div>
            <div className="card-group">
                <div className="line"></div>
                <h2 className="font-family-gill txt-al-center fnt-weight-300">Já vendidos</h2>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <ContactInfo />
        </div>
    )
}

