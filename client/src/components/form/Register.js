import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./form.css";
import validator from "validator";
import {
  getCategories,
  postUser,
  removeError,
  setError,
  
} from "../../actions/actions";


export const Register = () => {
 
 

const photo = localStorage.getItem("profileImage");
  const dispatch = useDispatch();
 
  const categories = useSelector((state) => state.rootReducer.categories);
  const { msgError } = useSelector((state) => state.logued);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "", //agregue el confirmado
    profilePicture: "",
    portfolio: "",
    category: [], // ver como pasarlo a array
  });

  

    const loadImg = async (files) => {
      const reader = new FileReader();
      reader.readAsDataURL(files);

      const formData = new FormData();
      formData.append("file", files);
    
      formData.append("upload_preset", "Atechnas");
      const options = {
        method: "POST",
        body: formData,
      };
      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
          options
        );
        const res_1 = await res.json();
        
        return setUser((prev) => ({ ...prev, profilePicture: res_1.secure_url }));
      } catch (err) {
        return console.log(err);
      }
    };

  function handleCheck(e) {
    e.preventDefault();
    if (e.target.checked) {
      setUser({
        ...user,
        category: user.category.concat(e.target.value),
      });
    } else {
      setUser({
        ...user,
        category: user.category?.filter(
          (category) => category !== e.target.value
        ),
      });
    }
  }

  function onInputChange(e) {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
    
  }


 

  function onSubmit(e) {
    e.preventDefault()
    if (ifFormIsValid1()) {
      dispatch(postUser(user))
      alert("¡Usuario creado con éxito!")
      setUser({
        name: "",
        lastName: "",
        email: "",
        password: "",
        profilePicture: "",
        portfolio: "",
        confirmPassword: "",
        category: [],
      });
     } // navigate('/profile')
  }


  const handleImageClick = (e) => {
    e.preventDefault();
    document.querySelector("#fotoPerfil").click();
  }; 

  const ifFormIsValid1 = () => {
    console.log(setError)
    if (!validator.isEmail(user.email)) {
      dispatch(setError("El email no es válido"));
      return false;
    }
    if (user.password !== user.confirmPassword) {
      dispatch(setError("Las contraseñas no coinciden"));
      return false;
    }
    if (user.password.trim().length === 0) {
      dispatch(setError("Falta la contraseña"));
      return false;
    }
    if (user.name.length === 0 || user.lastName.length === 0) {
      alert("Por favor, complete todos los campos");
      return false;
    }
    dispatch(removeError());
    return true;
  };
  
  return (
    <div>
      <form
        className="form-register"
        onSubmit={(e) => {
          onSubmit(e)
        }}
      >
        <h1 className="tituloRegister">BIENVENIDO A ATECHNAS</h1>
        <div className="flex">
          <div className="grupoRegister">
            <div>
              <div className="flex">
                <div className="grupoRegister">
                  <p className="labels">Imagen de perfil</p>
                  <input
                    type="file"
                    name="profilePicture"
                    id="fotoPerfil"
                    style={{ display: "none" }}
                    onChange={(e) => loadImg(e.target.files[0])}
                  />

                  <img
                    src={user.profilePicture}
                    alt="foto perfil"
                    name="photo"
                    width="250vw"
                    height="250vh"
                    value={user.profilePicture}
                  />
                  <br />
                  <button className="botonImg" onClick={handleImageClick} cursor="pointer">
                    subir
                  </button>
                </div>
              </div>
            </div>
            <p />
            <p className="labels">Nombre</p>
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              name="name"
              value={user.name}
              placeholder="Nombre"
              className="fields"
            />
          </div>
          <div className="grupoRegister">
            <p className="labels">Apellido</p>
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={user.lastName}
              onChange={(e) => onInputChange(e)}
              className="fields"
            />
          </div>
        </div>

        <div className="flex">
          <div className="grupoRegister">
            <p className="labels">E-mail</p>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => onInputChange(e)}
              className="fields"
            />
          </div>
          <div className="grupoRegister">
            <p className="labels">Contraseña</p>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={user.password}
              onChange={(e) => onInputChange(e)}
              className="fields"
            />
          </div>
        </div>

        <div className="flex">
          <div className="grupoRegister">
            <p className="labels">Link al Portfolio</p>
            <input
              type="text"
              name="portfolio"
              placeholder="Link al Portfolio"
              value={user.portfolio}
              onChange={(e) => onInputChange(e)}
              className="fields"
            />
          </div>
          <div className="grupoRegister">
            <p className="labels">Confirmar contraseña</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={user.confirmPassword}
              onChange={(e) => onInputChange(e)}
              className="fields"
            />
          </div>

          <div className="grupoRegister">
            <p className="labels">Categoría</p>
            {categories &&
              categories.map((c) => {
                return (
                  <div>
                    <input
                      key={c.id}
                      type="checkbox"
                      name="category"
                      value={c.category}
                      onChange={(e) => handleCheck(e)}
                      className="checkbox"
                    />
                    <label>{c.category}</label>
                  </div>
                )
              })}
          </div>
        </div>
        <button
          type="submit"
          className="botonRegistrar"
          onSubmit={(e) => onSubmit(e)}
        >
          Registrarse
        </button>
        {msgError?<div>{msgError}</div>:null}
      </form>
    </div>
  )
};
