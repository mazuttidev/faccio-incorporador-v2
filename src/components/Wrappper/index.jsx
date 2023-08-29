import React from "react";
import { NavBar } from "../Navbar";
import { Footer } from "../Footer";

export const Wrapper = ({children}) => {
    
    return(
        <div className="d-block">
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}