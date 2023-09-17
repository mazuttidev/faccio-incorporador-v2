import React, { useState } from "react";
import './style.css'
import faccioLogo from '../../img/faccio_contrutora_logo.png'

import { AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="nav">
                <div className="d-flex al-center">
                    <div className="l-menu p-14">
                        <a href="/" className="link-font"><span>home</span></a>
                        <a href="/empresa" className="link-font"><span>empresa</span></a>
                    </div>
                    <div className="nav-image">
                        <img src={faccioLogo} alt="Faccio Construtora Logo" />
                    </div>
                    <div className="r-menu p-14 ">
                        <a href="/empreendimentos" className="link-font"><span>empreendimentos</span></a>
                        <a href="/contato" className="link-font"><span>contato</span></a>
                    </div>
                    <button className="modal-menu">
                        <AiOutlineMenu onClick={showSidebar} />
                    </button>
                </div>
            </div>
            <div className="modal-menu" id={sidebar ? "open" : "none"}></div>
        </>

    );
}
