import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
// import foto from "../../assets/img/Persona1.png";
import "./Nav.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, logoutAll } from "../../actions/actions";


export default function Nav(props) {
  /* let fullId = props?.match?.params?.id; */
  const detail = useSelector((state) => state.rootReducer.details);
  const history = useHistory();
  const dispatch = useDispatch();
  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", "{}");
  }



  const user = JSON.parse(localStorage.getItem("user"));
 
   let name = user.name;
   let id = user.id;
   
   useEffect(() => {
     dispatch(getDetails(id));
    }, [dispatch, id]);
    
    let photo  = /* detail.profilePicture ?  detail.profilePicture : */ user.profilePicture ;
    
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
      <div className='flex-searchbar'>
      <SearchBar></SearchBar>

      {!name ?(
        <Link className="linkNavReg" to="/login">
          <h3>Ingresar / Registrarse</h3>
        </Link>
      ) : (
        <div>
        <img
              className="imgUser"
              src={photo}
              alt="imagen usuario"
              width="100vw"
              heigth="100vh"
            />
        <ul className="nav">
<li>{name}
<ul>
<li>
    <Link to={"/perfil/" + id}>
      <button style={{ textDecoration: "none" }}>Perfil</button>
    </Link>
  </li>
  <li>
    <Link to={`/perfil/edit/${id}`}>
      <button>Editar Perfil</button>
    </Link>
  </li>
  <li>
    <button onClick={handleLogout}>cerrar sesion</button>
  </li>
</ul>

</li>              
          </ul>
          </div>

//         <div className='div-nav'>
//         <img
//               className="imgUser"
//               src={photo ? photo : photo1}
//               alt="imagen usuario"
//               width="100vw"
//               heigth="100vh"
//             />
//         <ul className="ul-nav">
// <li>{name ? name : name1}
// <ul>
// <li>
//     <Link to={"/miPerfil/" + id}>
//       <button style={{ textDecoration: "none" }}>Perfil</button>
//     </Link>
//   </li>
//   <li>
//     <button onClick={handleLogout}>cerrar sesion</button>
//   </li>
// </ul>

// </li>              
//           </ul>
//           </div>
      )}
    </div>
   
    </div>
  );
}