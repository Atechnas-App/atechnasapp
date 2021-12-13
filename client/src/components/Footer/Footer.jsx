import React from 'react'
import "./Footer.css"
import logohenry from "../../assets/img/logohenry.png"
import Ycombinator from "../../assets/img/Ycombinator.png"
import {Link} from 'react-router-dom'

export default function Footer(){
    return (
        <div className="main-footer-container">
            <div className="upper-footer-container">
                <div className="upper-footer-container-left">
                    <h1 className="footer-title">Más información</h1>
                    <hr className="hrPresentationFooter"></hr>
                    <h3 className="h-text">Sobre Nosotros</h3>
                    <h3 className="h-text">Ayuda</h3>
                    <Link to='/contactanos'>
                    <h3 className="h-text">Contactanos</h3>
                    </Link>
                    <h3 className="h-text">Terminos y Condiciones</h3>
                </div>
                <div className="upper-footer-container-center">
                    
                    <h1 className="footer-title">Contactanos</h1>
                    
                    <hr className="hrPresentationFooter"></hr>
                    <h3 className="h-text">0800-888-Atechnas</h3>
                    <h3 className="h-text">atechnasapp@gmail.com</h3>
                </div>
                <div className="upper-footer-container-right">
                    <h1 className="footer-title">Empresas que nos apoyan</h1>
                    <hr className="hrPresentationFooter"></hr>
                    <img className="logo-henry" src={logohenry} alt="img not found"></img>
                    <img className="logo-ycombinator" src={Ycombinator} alt="img not found"></img>
                </div>
            </div>
            <div className="down-footer-container">
                
                <div>
                    <h1 className="footer-logo">ATECHNAS</h1>
                </div>
                <div>
                    <h5 className="footer-legal">© 2021, All Rights Reserved - Atechna Inc.</h5>
                </div>
                <div className="footer-socialmedia">
                    <div className="socialmedia-logo">Instagram</div>
                    <div className="socialmedia-logo">Facebook</div>
                    <div className="socialmedia-logo">Linkedin</div>
                </div>
            </div>
        </div>
    )
}
