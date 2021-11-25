import React from 'react'
import { Login } from './Login'
import { Register } from './Register'
import "./form.css"

export const LoginadnRegister = () => {
    return (
      <div className='container-login'>
        <div className="login">
          <Login />
        </div>
        <div className="formulario">
          <Register />
        </div>
      </div>
    );
}
