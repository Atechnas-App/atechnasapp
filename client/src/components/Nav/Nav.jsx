import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import foto from "../../assets/img/Persona1.png";
import './Nav.css';
import {Link} from 'react-router-dom';


export default function Nav(){
    return(
        <div className='nav'>
            <div className='containerNav'>
                <h1 className='nombreLogo'>ATECHNAS</h1>
                <SearchBar></SearchBar>
                <Link className='linkNavReg' to=''>
                    <h3>Ingresar / Registrarse</h3> 
                </Link>
        </div>
        <hr/>
       </div>
    )
}