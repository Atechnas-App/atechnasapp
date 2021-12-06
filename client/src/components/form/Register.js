import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router';
import "./form.css";
import validator from "validator";
import {
  getCategories,
  postUser,
  removeError1,
  setError1,
} from "../../actions/actions";
import { UpLoadImage } from "./UpLoadImage";

export const Register = () => {
 

  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const categories = useSelector((state) => state.rootReducer.categories);
  const { log } = useSelector((state) => state);

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
      [e.target.name]: e.target.value
    })
  }
  // const handleOnClick = (e)=>{
  //   e.preventDefault();
  //   console.log(e)
  // }

 

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
      })
    } // navigate('/profile')
  }

  const ifFormIsValid1 = () => {
    if (!validator.isEmail(user.email)) {
      dispatch(setError1("El email no es válido"));
      return false;
    }
    if (user.password !== user.confirmPassword) {
      dispatch(setError1("Las contraseñas no coinciden"));
      return false;
    }
    if (user.password.trim().length === 0) {
      dispatch(setError1("Falta la contraseña"));
      return false;
    }
    if (user.name.length === 0 || user.lastName.length === 0) {
      alert("Por favor, complete todos los campos");
      return false;
    }
    dispatch(removeError1());
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

      <div>
        <h1 className="tituloRegister">BIENVENIDO A ATECHNAS</h1>
        <div className="flex">
          <div className="grupoRegister">
      
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
              name="confirmpassword"
              placeholder="Confirmar contraseña"
              value={user.confirmpassword}
              onChange={(e) => onInputChange(e)}
              className="fields"
            />
          </div>
        </div>  
            <div className="flex">
              <UpLoadImage  />
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
        {log.msgError1 && <div>{log.msgError1}</div>}
      </div>
      </form>
    </div>
  )
};
