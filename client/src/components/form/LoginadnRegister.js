import React from 'react'
import { Login } from './Login'
import { Register } from './Register'
import Nav from '../Nav/Nav'
import {Link} from 'react-router-dom'
import "./form.css"

export const LoginadnRegister = () => {
    return (
      <div className='ajustarHome Antechna'>
        <Nav/>
        <div className='container-login'>
          
          <div className="login">
            <Login />
          </div>
          <div>
            <Register className="formulario" />
          </div>
        </div>
      </div>
    );
}
