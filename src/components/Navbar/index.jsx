import React from "react";
import './style.css'

export const NavBar = () => {


    return (
        <div className="nav">
            <div className="d-flex al-center">
                <div className="l-menu p-14 p-30">
                    <a href="/" className="link-font"><span>home</span></a>
                    <a href="/empresa" className="link-font"><span>empresa</span></a>
                </div>
                <div className="c-menu logo">FACCIO CONSTRUTORA</div>
                <div className="r-menu p-14 p-30">
                    <a href="/empreendimentos" className="link-font"><span>empreendimentos</span></a>
                    <a href="/contato" className="link-font"><span>contato</span></a>
                </div>
            </div>
        </div>
    );
}
