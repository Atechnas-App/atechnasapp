import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import foto from "../../assets/img/Persona1.png";
import './Nav.css';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAll } from '../../actions/actions';
import {  useNavigate } from 'react-router';


export default function Nav(){

   const navigate = useNavigate()
 const dispatch = useDispatch()
   const name = localStorage.getItem("displayName")
   const photo = localStorage.getItem("photoURL")
      
   const handleLogout = () => {
       dispatch(logoutAll());
       navigate("/login");     
   }
    
    return (
      <div className="containerNav">
        <Link to="/">
          <h1 className="nombreLogo">ATECHNAS</h1>
        </Link>
        <SearchBar></SearchBar>

        {!name ? (
          <Link className="linkNavReg" to="/login">
            <h3>Ingresar / Registrarse</h3>
          </Link>
        ) : (
          <div className="containerUser">
            <div className="containerUserImg">
              <img className="imgUser" src={photo} alt="" />
              <h3 className="nameUser">{name}</h3>
            </div>
            <button onClick={handleLogout}>cerrar sesion</button>
          </div>
        )}
      </div>
    );
}
