import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import {
  postLogin,
  removeError,
  setError,
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../actions/actions";
import validator from 'validator'
import "./form.css"
import { useNavigate } from 'react-router'





export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { log } = useSelector(state => state)




  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  })

  const { email, password } = formValues


  const handleLogin = (e) => {
    e.preventDefault()
    if (ifFormIsValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  }


  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
    if (log.login === true) {
      navigate('/')
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

        <div
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
          <p className="btn-text">
            <b>Entrar con Google</b>
          </p>
        </div>
      </form>
    </div>
  );
}
