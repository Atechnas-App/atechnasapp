import React from 'react'
import { useDispatch } from 'react-redux';
import { startUploading } from '../../actions/actions';

export const Register = () => {


  
  const dispatch = useDispatch();
  
  const handleImageClick = (e)=>{
    e.preventDefault();
   document.querySelector("#fotoPerfil").click();
   console.log("click")
  }

const handleFileChange = (e)=>{
  e.preventDefault();
  const file = e.target.files[0];
  if(file){
    dispatch(startUploading(file));
  }
}

const handleOnClick = (e)=>{
  e.preventDefault();
  console.log(e)
}

    return (
      <div>
        <form>
          <h1>Bienvenido a Atechnas</h1>

          <span>Nombre</span>
          <input type="text" name="name" placeholder="Nombre" />
          <span>Apellido</span>
          <input type="text" name="lastName" placeholder="Apellido" />
          <span>E-mail</span>
          <input type="text" name="email" placeholder="Email" />
          <span>Contraseña</span>
          <input
           type="password" 
          name="password"
           placeholder="Contraseña" />
          <span>Confirmar contraseña</span>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirmar contraseña"
          />
          <span>Link al Portfolio</span>
          <input type="text" name="portfolio" placeholder="Link al Portfolio" />
          <span>Imagen de perfil</span>
          <input
            id="fotoPerfil"
            type="file"
            name="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button type="submit" onClick={handleImageClick}>subir</button>
          <h2>Categoría</h2>
          <input type="checkbox" name="category" value="Developer" />
          <label>Desarrollador</label>
          <input type="checkbox" name="category" value="Designer" />
          <label>Diseñador</label>
          <input type="checkbox" name="category" value="Marketing" />
          <label>Marketing</label>

          <button type="submit" onClick={handleOnClick}>Registrarse</button>
        </form>
      </div>
    );
}
