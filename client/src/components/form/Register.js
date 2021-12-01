
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
// import { useNavigate } from 'react-router';
import "./form.css"
import validator from 'validator'
import { getCategories, postUser, removeError, setError, startUploading } from "../../actions/actions";


export const Register = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const categories = useSelector((state) => state.rootReducer.categories)
  const {log} = useSelector((state) => state)

  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])

  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:'', //agregue el confirmado 
    profilePicture: '',
    portfolio: '',
    category: [] // ver como pasarlo a array
  })

 
  console.log("register cat", user.category)


  const handleImageClick = (e) => {
    e.preventDefault();
    document.querySelector("#fotoPerfil").click();
  };

   function handleCheck(e) {
    e.preventDefault();
    if (e.target.checked) {
      setUser({
        ...user,
        category: user.category.concat(e.target.value) 
      })
    } else {
     
      setUser({
        ...user,
        category: user.category?.filter(category => category !== e.target.value)
      })
    }
  }

 /* function onInputChange(e) {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
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
  } */

  function onInputChange(e) {
    console.log(e.target.value);
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
// const handleOnClick = (e)=>{
//   e.preventDefault();
//   console.log(e)
// }

  const handleFileChange = (e)=>{
    e.preventDefault();
    const file = e.target.files[0];
    if(file){
      dispatch(startUploading(file));
    }
  }
  // const ifFormIsValid = () => {

  //   if (!validator.isEmail(email)) {
  //     dispatch(setError("Email is invalid"));
  //     return false;
  //   } else if (password.trim().length === 0) {
  //     dispatch(setError("Password is required"));
  //     return false;
  //   }
  //   dispatch(removeError());
  //   return true;
  
  //   };
  

  function onSubmit(e) {
    e.preventDefault();
    if(ifFormIsValid()){
    dispatch(postUser(user));
    alert("¡Usuario creado con éxito!");
    setUser({
      name: "",
      lastName: "",
      email: "",
      password: "",
      profilePicture: "",
      portfolio: "",
      confirmpassword: "",
      category: [],
    });
  }// navigate('/profile')
  }
const ifFormIsValid = () => {
  if (!validator.isEmail(user.email)) {
    dispatch(setError( "El email no es válido"));
    return false;
  }
  if (user.password !== user.confirmpassword) {
    dispatch(setError("Las contraseñas no coinciden"));
    return false;
  }
  if (user.password.trim().length === 0) {
    dispatch(setError("Falta la contraseña"));
    return false;
  }
  if (  user.name.length === 0 ||
        user.lastName.length === 0 ) { 
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
          onSubmit(e);
        }}
      >
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
          <div className="grupoRegister">
            <p className="labels">Imagen de perfil</p>
            <input
              type="file"
              name="profilePicture"
              id="fotoPerfil"
              value={user.profilePicture} style={{ display: "none" }}
              onChange={handleFileChange} />
              <br/>
              <button  className='botonImg' onClick={(e) => {handleImageClick(e)}}>subir</button>
            </div >
            <div className='grupoRegister'>
              <p className='labels'>Categoría</p>
              {
                categories && categories.map(c => {
                  return <div>
                    <input key={c.id} type='checkbox' name='category' value={c.category} onChange={(e) => handleCheck(e)} className='checkbox'/>
                    <label>{c.category}</label>
                  </div>
                  
                })
              }
            </div>
          </div>
          <button type='submit' className='botonRegistrar' onSubmit={(e) => onSubmit(e)}>Registrarse</button>
            {log.msgError && <div>{log.msgError}</div>}
        </form>
      </div>
    );

}

