import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import foto from "../../assets/img/Persona1.png";
import './Nav.css';
import {Link , useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAll } from '../../actions/actions';



export default function Nav(){

   const history = useHistory()
 const dispatch = useDispatch()
   const name = localStorage.getItem("displayName")
   const photo = localStorage.getItem("photoURL")
   const user = JSON.parse(localStorage.getItem("user")); 
   localStorage.setItem("profileImage", " ");
   let name1 = user.name?user.name:"";
   let photo1  = user.profilePicture?user.profilePicture:"";

   const handleLogout = () => {
       dispatch(logoutAll());
       localStorage.setItem("user", "{}")
       history.push("/login");     
   }
    
    return (
      <div className="containerNav">
        <Link to="/">
          <h1 className="nombreLogo">ATECHNAS</h1>
        </Link>
        <SearchBar></SearchBar>

        {!name && !name1 ? (
          <Link className="linkNavReg" to="/login">
            <h3>Ingresar / Registrarse</h3>
          </Link>
        ) : (
          <div className="containerUser">
            <div className="containerUserImg">
              <img className="imgUser" src={photo ? photo : photo1} alt="imagen usuario" width="100vw" heigth="100vh"/>
              <h3 className="nameUser">{name ? name : name1}</h3>
            </div>
            <button onClick={handleLogout}>cerrar sesion</button>
          </div>
        )}
      </div>
    );
}
