import React from 'react'

export const Register = () => {
    return (
      <div >
        <form>
          <h1>Bienvenido a Atechnas</h1>

          <span>Nombre</span>
          <input type="text" name="Name" placeholder="Nombre" />
          <span>Apellido</span>
          <input type="text" name="LastName" placeholder="Apellido" />
          <span>E-mail</span>
          <input type="text" name="Email" placeholder="Email" />
          <span>Contraseña</span>
          <input type="password" name="Password" placeholder="Contraseña" />
          <span>Confirmar contraseña</span>
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirmar contraseña"
          />
          <span>Link al Portfolio</span>
          <input type="text" name="Portfolio" placeholder="Link al Portfolio" />
          <span>Imagen de perfil</span>
          <input type="file" name="Image" />
          <button>subir</button>
          <h2>Categoría</h2>
          <input type="checkbox" name="Category" value="Developer" />
          <label>Desarrollador</label>
          <input type="checkbox" name="Category" value="Designer" />
          <label>Diseñador</label>
          <input type="checkbox" name="Category" value="Marketing" />
          <label>Marketing</label>

          <button>Registrarse</button>
        </form>
      </div>
    );
}
