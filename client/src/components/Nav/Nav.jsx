import React, { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import foto from "../../assets/img/Persona1.png";
import './Nav.css';
import {Link , useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, logoutAll } from '../../actions/actions';


export default function Nav(){
  
  const detail = useSelector((state) => state.rootReducer.details);
   const history = useHistory()
 const dispatch = useDispatch()
 if (!localStorage.getItem("user")) {
   localStorage.setItem("user", "{}");
} 


   const name = localStorage.getItem("displayName")
   const photo = localStorage.getItem("photoURL")
   const user = JSON.parse(localStorage.getItem("user")); 
 
   let name1 = user.name;
   let id = user.id;
   
   useEffect(() => {
     dispatch(getDetails(id));
    }, [dispatch, id]);
    
    let photo1  = detail.profilePicture?  detail.profilePicture:user.profilePicture ;
    
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
              <img
                className="imgUser"
                src={photo ? photo : photo1}
                alt="imagen usuario"
                width="100vw"
                heigth="100vh"
              />
              <h3 >{name ? name : name1}</h3>
            </div>
            <div >
              <Link to={"/perfil/" + id}>
                <button style={{textDecoration:"none"}}>Perfil</button>
              </Link>
            </div>
            <div>
              <Link to={"/trabajos/"+id}>
                <button>Mis trabajos</button>
              </Link>
            </div>
            <div>
              <button onClick={handleLogout}>cerrar sesion</button>
            </div>
          </div>
        )}
      </div>
    );
}
