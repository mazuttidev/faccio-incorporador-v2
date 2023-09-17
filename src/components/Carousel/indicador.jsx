import React from "react";

export const Indicador = ({ setSelected, selected, slide }) => {

    const handleSelect = () => {
        setSelected(slide)
    }
    
    return (
        <button className={ selected.id === slide.id ? "indicator-selected" : "indicator"} onClick={handleSelect} />
    )
}