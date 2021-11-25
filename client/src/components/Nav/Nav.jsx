import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import foto from "../../assets/img/Persona1.png";
import './Nav.css';
import {Link} from 'react-router-dom';


export default function Nav(){
    return(
        <div className='containerNav'>
            <Link to="/">
            <h1 className='nombreLogo'>ATECHNAS</h1>
            </Link>
            <SearchBar></SearchBar>
            <Link className='linkNavReg' to='/login'>
                <h3>Ingresar / Registrarse</h3> 
            </Link>
       </div>
    )
}