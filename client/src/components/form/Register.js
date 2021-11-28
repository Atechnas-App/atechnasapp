import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
// import { useNavigate } from 'react-router';
import { postUser } from '../../actions/actions';

export const Register = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    profilePicture: '',
    portfolio: '',
    category: '' // ver como pasarlo a array
  })

  function handleCheck(e){
    e.preventDefault()
    if(e.target.checked){
      setUser({
        ...user,
        category: e.target.value
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
      <div >
        <form onSubmit={(e) => {onSubmit(e)}}>
          <h1 className='tituloRegister'>BIENVENIDO A ATECHNAS</h1>
          <div>
            <p>Nombre</p>
            <input onChange={(e) => onInputChange(e)} type="text" name="name" placeholder="Nombre" className='fields' value={user.name} />
          </div>
          <div>
            <p>Apellido</p>
            <input type="text" name="lastName" placeholder="Apellido" value={user.lastName} onChange={(e) => onInputChange(e)}/>
          </div>
          <div>
            <p>E-mail</p>
            <input type="text" name="email" placeholder="Email" value={user.email} onChange={(e) => onInputChange(e)}/>
          </div>
          <div>
            <p>Contraseña</p>
            <input type="password" name="password" placeholder="Contraseña" value={user.password} onChange={(e) => onInputChange(e)}/>
          </div>
          <div>
            <p>Confirmar contraseña</p>
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="Confirmar contraseña"
              // value={user.password}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <p>Link al Portfolio</p>
            <input type="text" name="portfolio" placeholder="Link al Portfolio" value={user.portfolio} onChange={(e) => onInputChange(e)}/>
          </div>
          <div>
            <p>Imagen de perfil</p>
            <input type="file" name="profilePicture" value={user.profilePicture} onChange={(e) => onInputChange(e)}/>
            <br/>
            <button>subir</button>
          </div>
          <div>
          <p>Categoría</p>
          <div>
            <input type="checkbox" name="category" value="developer" onChange={(e) => handleCheck(e)}/>
            <label>Desarrollador</label>
          </div>
          <div>
            <input type="checkbox" name="category" value="designer" onChange={(e) => handleCheck(e)}/>
            <label>Diseñador</label>
          </div>
          <div>
            <input type="checkbox" name="category" value="marketing" onChange={(e) => handleCheck(e)}/>
            <label>Marketing</label>
          </div>
          </div>
          <button type='submit'>Registrarse</button>
        </form>
      </div>
    );
}
