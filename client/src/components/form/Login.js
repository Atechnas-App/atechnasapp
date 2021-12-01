import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import {
  postLogin,
  removeError,
  setError,
  startGoogleLogin,
} from "../../actions/actions";
import validator from 'validator'
import "./form.css"
import { useHistory } from 'react-router-dom'


export const Login = () => {
const history = useHistory()
const dispatch = useDispatch()

const { log } = useSelector((state) => state);


  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  })

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    if (ifFormIsValid()) {
      dispatch(postLogin(formValues));
      history.push('/')
    }
  }

const handleGoogleLogin = () => {
  dispatch(startGoogleLogin());
  if(log.auth === true){
    console.log(log.auth)
    history.push('/')   // ESTO ANDA, PERO HAY UN PROBLEMA CON EL RENDER, QUE ESTÁ UNA ACCION ATRASADO. ES UN PROBLEMA MAS GENERAL
  }
}

  const ifFormIsValid = () => {

    if (!validator.isEmail(email)) {
      dispatch(setError("Email is invalid"));
      return false;
    } else if (password.trim().length === 0) {
      dispatch(setError("Password is required"));
      return false;
    }
    dispatch(removeError());
    return true;

  };

  return (

    <div className='entrarContainer'>
      <h1 className='tituloRegister'>ENTRAR</h1>
      {/* LOGIN LOCAL  */}
      <form onSubmit={handleLogin}>
        <div>
          <p className='labels'>E-mail</p>
          <input value={email} onChange={handleInputChange}
            type="text" name="email" placeholder="atechnas@atechnas.com"
            className='fields' />
        </div>
        <div>
          <p className='labels'>Contraseña</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className='fields'
          />
        </div>
        <a href="/" className='olvido-contraseña'>¿Te olvidaste la contraseña?</a>
        <p />
        <button onClick={handleLogin} className='botonImg'>Entrar</button>
        {/* FIN LOGIN LOCAL */}

        <button
          className="google-btn"
          onClick={handleGoogleLogin}
        /* disabled={loading} */
        >
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          {log.msgError && (
          <div >{log.msgError}</div>
        )}
        <p className="btn-text">
              <b>Entrar con Google</b>
            </p>
          <p />

          </button>
        </form>
      </div>
    );
}
