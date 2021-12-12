import React from 'react'
import "./Footer.css"
import logohenry from "../../assets/img/logohenry.png"
import Ycombinator from "../../assets/img/Ycombinator.png"
import {Link} from 'react-router-dom'
import linkedin from "../../assets/img/linkedin.png"
import github from "../../assets/img/github.png"
import instagram from "../../assets/img/instagram.png"

export default function Footer(){
    return (
        <div className="main-footer-container">
            <div className="upper-footer-container">
                <div className="upper-footer-container-left">
                    <h1 className="footer-title">Más información</h1>
                    <hr className="hrPresentationFooter"></hr>
                    <Link to="/sobreNosotros" >
                        <h3 className="h-text">Sobre Nosotros</h3>
                    </Link>
                    <Link to="/contactanos">
                        <h3 className="h-text">Contactanos</h3>
                    </Link>
                    <Link to="/FAQ">
                        <h3 className="h-text">FAQ</h3>
                    </Link>
                    <Link to="/terms">
                        <h3 className="h-text">Terminos y Condiciones</h3>
                    </Link>
                </div>
                <div className="upper-footer-container-center">
                    <h1 className="footer-title">Contactanos</h1>
                    <hr className="hrPresentationFooter"></hr>
                    <h3 className="h-text">0800-888-Atechnas</h3>
                    <a href='mailto:atechnasapp@gmail.com' target="_blank">
                        <h3 className="h-text">atechnasapp@gmail.com</h3>
                    </a>
                </div>
                <div className="upper-footer-container-right">
                    <h1 className="footer-title">Empresas que nos apoyan</h1>
                    <hr className="hrPresentationFooter"></hr>
                    <a href="https://www.soyhenry.com/" target="_blank">
                        <img className="logo-henry" src={logohenry} alt="img not found"></img>
                    </a>
                    <a href='https://www.ycombinator.com/' target="_blank">
                        <img className="logo-ycombinator" src={Ycombinator} alt="img not found"></img>
                    </a>
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
                    <a className="socialmedia-logo" href='https://www.linkedin.com/in/atechnas' target="_blank">
                        <img src={linkedin} className='socialmedia'/>
                    </a>
                    <a className="socialmedia-logo" href='https://github.com/Atechnas-App' target="_blank">
                        <img src={github} className='socialmedia'/>
                    </a>
                    <a className="socialmedia-logo" href='https://www.instagram.com/atechnasapp/' target="_blank">
                        <img src={instagram} className='socialmedia'/>
                    </a>
                </div>
            </div>
        </div>
    )
}
