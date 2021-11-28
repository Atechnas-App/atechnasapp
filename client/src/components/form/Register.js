import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
// import { useNavigate } from 'react-router';
import { postUser } from '../../actions/actions';
import { startUploading } from '../../actions/actions';
import "./form.css"



export const Register = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  
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

  function handleCheck(e){
    e.preventDefault()
    if(e.target.checked){
      setUser({
        ...user,
        category: e.target.value    //que pushee al array de user
      })}
    // } else {
    //   setUser({
    //     ...user,
    //     category: user.category?.filter(category => category !== e.target.value)
    //   })
    // }
  }

  function onInputChange(e){
    console.log(e.target.value)
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e){
    e.preventDefault()
    dispatch(postUser(user))
    alert('¡Usuario creado con éxito!')
    setUser({
      name: '',
      lastName: '',
      email: '',
      password: '',
      profilePicture: '',
      portfolio: '',
      category: ''
    })
   // navigate('/profile')
  }
  
    return (
      <div>
        
        <form className='form-register' onSubmit={(e) => {onSubmit(e)}}>
          <h1 className='tituloRegister'>BIENVENIDO A ATECHNAS</h1>
          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>Nombre</p>
              <input onChange={(e) => onInputChange(e)} type="text" name="name" placeholder="Nombre" className='fields'/>
            </div>
            <div className='grupoRegister'>
              <p className='labels'>Apellido</p>
              <input type="text" name="lastName" placeholder="Apellido" value={user.lastName} onChange={(e) => onInputChange(e)} className='fields' />
            </div>
          </div>

          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>E-mail</p>
              <input type="text" name="email" placeholder="Email" value={user.email} onChange={(e) => onInputChange(e)}  className='fields'/>
            </div>
            <div className='grupoRegister'>
              <p className='labels'>Contraseña</p>
              <input type="password" name="password" placeholder="Contraseña" value={user.password} onChange={(e) => onInputChange(e)}  className='fields'/>
            </div>
          </div>

          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>Link al Portfolio</p>
              <input  type="text" name="portfolio" placeholder="Link al Portfolio" value={user.portfolio} onChange={(e) => onInputChange(e)} className='fields' />
            </div>
            <div className='grupoRegister'>
              <p className='labels'>Confirmar contraseña</p>
              <input
               type="password"
               name="confirmPassword"
               placeholder="Confirmar contraseña"
               // value={user.password}
               // onChange={(e) => onInputChange(e)}
                className='fields'
              />
            </div>

          </div>

          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>Imagen de perfil</p>
              <input type="file" name="profilePicture" 
              id="fotoPerfil"
              value={user.profilePicture} style={{ display: "none" }}
              onChange={handleFileChange} />
              <br/>
              <button  className='botonImg' onClick={(e) => {handleImageClick(e)}}>subir</button>
            </div >
            <div className='grupoRegister'>
              <p className='labels'>Categoría</p>
              <div>
                <input type="checkbox" name="category" value="developer" onChange={(e) => handleCheck(e)} className='checkbox'/>
                <label>Desarrollador</label>
              </div>
              <div>
                <input type="checkbox" name="category" value="developer" onChange={(e) => handleCheck(e)} className='checkbox' />
                <label>Diseñador</label>
              </div>
              <div>
                <input type="checkbox" name="category" value="developer" onChange={(e) => handleCheck(e)} className='checkbox'/>
                <label>Marketing</label>
              </div>
            </div>
          </div>
          <button type='submit' className='botonRegistrar' onSubmit={(e) => onSubmit(e)}>Registrarse</button>
        </form>
      </div>
    );
}
