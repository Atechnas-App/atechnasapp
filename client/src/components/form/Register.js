import React from 'react'

export const Register = () => {
    return (
      <div >
        <form>
          <h1 className='tituloRegister'>BIENVENIDO A ATECHNAS</h1>
          <div>
            <p>Nombre</p>
            <input type="text" name="Name" placeholder="Nombre" className='fields'/>
          </div>
          <div>
            <p>Apellido</p>
            <input type="text" name="LastName" placeholder="Apellido" />
          </div>
          <div>
            <p>E-mail</p>
            <input type="text" name="Email" placeholder="Email" />
          </div>
          <div>
            <p>Contraseña</p>
            <input type="password" name="Password" placeholder="Contraseña" />
          </div>
          <div>
            <p>Confirmar contraseña</p>
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="Confirmar contraseña"
            />
          </div>
          <div>
            <p>Link al Portfolio</p>
            <input type="text" name="Portfolio" placeholder="Link al Portfolio" />
          </div>
          <div>
            <p>Imagen de perfil</p>
            <input type="file" name="Image" />
            <br/>
            <button>subir</button>
          </div>
          <div>
          <p>Categoría</p>
          <div>
            <input type="checkbox" name="Category" value="Developer" />
            <label>Desarrollador</label>
          </div>
          <div>
            <input type="checkbox" name="Category" value="Designer" />
            <label>Diseñador</label>
          </div>
          <div>
            <input type="checkbox" name="Category" value="Marketing" />
            <label>Marketing</label>
          </div>
          </div>
          <button>Registrarse</button>
        </form>
      </div>
    );
}
