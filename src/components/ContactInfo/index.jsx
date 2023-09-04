import React from "react";
import "./style.css"
import { BsHeadset, BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

export const ContactInfo = () => {
    return (
        <div className="home-text-mission change-colors">
            <div className="d-block">
                <div className="d-flex jc-center">
                    <a className="d-block col-2 link-font">
                        <div className="d-flex txt-al-center change-colors">
                            <span className="span-icon mg-right-10"><BsHeadset /></span>
                            <div className="d-block txt-al-left">
                                <h2 className="h2-mission mg-0">Atendimento</h2>
                                <p className="p-mission mg-0">(54) 3333-3333</p>
                            </div>
                        </div>
                    </a>
                    <a className="d-block col-2 link-font">
                        <div className="d-flex txt-al-center change-colors">
                            <span className="span-icon mg-right-10"><BsWhatsapp /></span>
                            <div className="d-block txt-al-left">
                                <h2 className="h2-mission mg-0">WhatsApp</h2>
                                <p className="p-mission mg-0">(54) 99999-9999</p>
                            </div>
                        </div>
                    </a>
                    <a className="d-block col-3 link-font">
                        <div className="d-flex txt-al-center change-colors">
                            <span className="span-icon mg-right-10"><AiOutlineMail /></span>
                            <div className="d-block txt-al-left">
                                <h2 className="h2-mission mg-0">Envie uma mensagem</h2>
                                <p className="p-mission mg-0">contato@facciocontrutora.com</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}