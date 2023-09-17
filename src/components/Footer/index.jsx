import React from "react";
import "./style.css"
import { BsChevronCompactUp } from "react-icons/bs"
import faccioLogo from '../../img/faccio_contrutora_logo.png'

export const Footer = () => {
    return (
        <footer>
            <div className="d-flex jc-between pd-30">

                <div className=" d-flex logo-acesso-rapido">
                    <div className="d-block mg-r-60 gap-8">
                        <div className="footer-image">
                            <img src={faccioLogo} alt="Faccio Construtora Logo" />
                        </div>
                        <p className="adress">
                            Rua Fábio Salton Marodin, 95 - Sala 101 <br />
                            Bairro São Roque | CEP 95708-446 <br />
                            Bento Gonçalves - Rio Grande do Sul</p>
                    </div>
                    <div className="d-grid gap-8">
                        <h2>Acesso Rápido</h2>
                        <a className="link-font">Home</a>
                        <a className="link-font">Empresa</a>
                        <a className="link-font">Empreendimentos</a>
                        <a className="link-font">Contato</a>
                    </div>
                </div>
                <div className="end-2-top">
                    <a href="#top" className="d-flex link-font">
                        <span className="icon-chevron-up"> <BsChevronCompactUp /> </span>
                        <span>voltar ao topo</span>
                    </a>
                </div>
            </div>

            <div className="copy mg-top-40 pd-30 d-flex">
                <p className="link-font">Todos direitos reservados</p>
                <a className="dev d-flex link-font">VICTOR MAZUTTI</a>
            </div>
        </footer>
    )
}