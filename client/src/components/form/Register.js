import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
// import { useNavigate } from 'react-router';
import { getCategories, postUser } from '../../actions/actions';
import { startUploading } from '../../actions/actions';

export const Register = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const categories = useSelector((state) => state.rootReducer.categories)
  console.log(categories)
  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])

  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    profilePicture: '',
    portfolio: '',
    category: [] // ver como pasarlo a array
  })


  const handleImageClick = (e)=>{
    e.preventDefault();
   document.querySelector("#fotoPerfil").click();
   console.log("click")
  }

const dispatch = useDispatch();

  function handleCheck(e){
    e.preventDefault()
    if(e.target.checked){
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
}

const handleOnClick = (e)=>{
  e.preventDefault();
  console.log(e)
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
      category: []
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
              <input onChange={(e) => onInputChange(e)} type="text" name="name" value={user.name} placeholder="Nombre" className='fields'/>
            </div>
            <div className='grupoRegister'>
              <p className='labels'>Apellido</p>
              <input type="text" name="lastName" placeholder="Apellido" value={user.lastName} onChange={(e) => onInputChange(e)} className='fields' />
            </div>
          </div>

          <span>Nombre</span>
          <input type="text" name="Name" placeholder="Nombre" />
          <span>Apellido</span>
          <input type="text" name="LastName" placeholder="Apellido" />
          <span>E-mail</span>
          <input type="text" name="Email" placeholder="email" />
          <span>Contraseña</span>
          <input
           type="password" 
          name="Password"
           placeholder="Contraseña" />
          <span>Confirmar contraseña</span>
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirmar contraseña"
          />
          <span>Link al Portfolio</span>
          <input type="text" name="Portfolio" placeholder="Link al Portfolio" />
          <span>Imagen de perfil</span>
          <input
            id="fotoPerfil"
            type="file"
            name="file"
            /* style={{ display: "none" }} */
            onChange={handleFileChange}
          />
          <button onClick={handleImageClick}>subir</button>
          <h2>Categoría</h2>
          <input type="checkbox" name="Category" value="Developer" />
          <label>Desarrollador</label>
          <input type="checkbox" name="Category" value="Designer" />
          <label>Diseñador</label>
          <input type="checkbox" name="Category" value="Marketing" />
          <label>Marketing</label>

          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>Link al Portfolio</p>
              <input  type="text" name="portfolio" placeholder="Link al Portfolio" value={user.portfolio} onChange={(e) => onInputChange(e)} className='fields' />
            </div>
            <div className='grupoRegister'>
              <p className='labels'>Confirmar contraseña</p>
              <input
               type="password"
               name="ConfirmPassword"
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
              {/* <div>
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
              </div> */}
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
        </form>
      </div>
    );

