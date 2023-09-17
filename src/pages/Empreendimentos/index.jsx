import React from "react";
import "./style.css"
import { ContactInfo } from "../../components/ContactInfo";
import { CardFull } from "../../components/CardFull";
import esplendore from '../../img/esplendore-externo.jpg'
import felicitta from '../../img/felicita-externo.jpg'
import edificil from '../../img/edificil.jpeg'

export const Empreendimentos = () => {

    return (
        <div className="container">
            <div className="title-section">
                <h2 className="title-h2 font-family-gill">Empreendimentos</h2>
            </div>

            <div className="card-container-empreendimentos font-family-montserrat">
                <CardFull
                    href=""
                    imgSrc={esplendore}
                    edName="Esplendoré"
                    descEdificio="Nós estamos animados em apresentar este edifício com apartamentos espaçosos e confortáveis, ideais para você e sua família."
                    locate="Guaporé/ RS"
                />
                <CardFull
                    href=""
                    imgSrc={felicitta}
                    edName="Felicittá"
                    descEdificio="Aqui você encontrará uma experiência completa de moradia, em um edifício que combina comodidade, segurança e lazer em um só lugar."
                    locate="Guaporé/ RS"
                />
                <CardFull
                    href=""
                    imgSrc={edificil}
                    edName="Bell Mont"
                    descEdificio="Aqui, a modernidade se encontra com a sustentabilidade. Estes edifícios são a escolha perfeita para um estilo de vida consciente."
                    locate="Guaporé/ RS"
                />
            </div>
            <ContactInfo />
        </div>
    )
}