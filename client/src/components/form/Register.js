import React from 'react'
import "./form.css"

export const Register = () => {
    return (
      <div >

        
        
        <form className='form-register'>
          <h1 className='tituloRegister'>BIENVENIDO A ATECHNAS</h1>
          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>Nombre</p>
              <input type="text" name="Name" placeholder="Nombre" className='fields'/>
            </div>
            <div className='grupoRegister'>
              <p className='labels'>Apellido</p>
              <input type="text" name="LastName" placeholder="Apellido" className='fields' />
            </div>
          </div>

          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>E-mail</p>
              <input type="text" name="Email" placeholder="Email"  className='fields'/>
            </div>
            <div className='grupoRegister'>
              <p className='labels'>Contraseña</p>
              <input type="password" name="Password" placeholder="Contraseña"  className='fields'/>
            </div>
          </div>

          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>Link al Portfolio</p>
              <input type="text" name="Portfolio" placeholder="Link al Portfolio" className='fields' />
            </div>
            <div className='grupoRegister'>
              <p className='labels'>Confirmar contraseña</p>
              <input
                type="password"
                name="ConfirmPassword"
                placeholder="Confirmar contraseña"
                className='fields'
              />
            </div>
          </div>

          <div className='flex'>
            <div className='grupoRegister'>
              <p className='labels'>Imagen de perfil</p>
              <input type="file" name="Image" />
              <br/>
              <button  className='botonImg'>subir</button>
            </div >
            <div className='grupoRegister'>
              <p className='labels'>Categoría</p>
              <div>
                <input type="checkbox" name="Category" value="Developer" className='checkbox'/>
                <label>Desarrollador</label>
              </div>
              <div>
                <input type="checkbox" name="Category" value="Designer" className='checkbox' />
                <label>Diseñador</label>
              </div>
              <div>
                <input type="checkbox" name="Category" value="Marketing" className='checkbox'/>
                <label>Marketing</label>
              </div>
            </div>
          </div>

          <button className='botonRegistrar'>Registrarse</button>


        </form>
      </div>
    );
}
