import React from "react";
import './style.css'

export const NavBar = () => {


    return (
        <div className="nav">
            <div className="d-flex al-center">
                <div className="l-menu p-14 p-30">
                    <a><span>about</span></a>
                    <a><span>empresa</span></a>
                </div>
                <div className="c-menu logo">FACCIO CONSTRUTORA</div>
                <div className="r-menu p-14 p-30">
                    <a><span>empreendimentos</span></a>
                    <a><span>contato</span></a>
                </div>
            </div>
        </div>
    );
}
