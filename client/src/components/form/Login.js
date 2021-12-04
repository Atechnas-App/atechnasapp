import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import {
  postLogin,
  removeError1,
  setError1,
  startGoogleLogin,
} from "../../actions/actions";
import validator from 'validator'
import "./form.css"
import { useHistory } from 'react-router-dom'





export const Login = () => {
const history =useHistory()
const dispatch = useDispatch()

const {logued} = useSelector((state) => state);  
console.log(logued)
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  })

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    if (ifFormIsValid()) {
      dispatch(postLogin(formValues));
      if(localStorage.getItem("user","id")){
      history.push('/')
    }
  }
  }

const handleGoogleLogin = () => {
  dispatch(startGoogleLogin());
  if(logued.auth === true){
    window.location.replace('/')
  } 
    
}

  const ifFormIsValid = () => {

    if (!validator.isEmail(email)) {
      dispatch(setError1("Correo invalido"))
      return false;
    } else if (password.trim().length === 0) {
      dispatch(setError1("La contraseña no puede estar vacia"));
      return false;
    }
    dispatch(removeError1());
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

        {logued.msgError1 && (
        <div >{logued.msgError1}</div>
      )}

      <p/>
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
        <p className="btn-text">
              <b>Entrar con Google</b>
            </p>
          <p />

          </button>
        </form>
      </div>
    );
}
