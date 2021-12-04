import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import {
  postLogin,
  removeError,
  setError,
  startGoogleLogin,
  getGithubUserInfo
} from "../../actions/actions";
import validator from 'validator'
import "./form.css"
import githubIcon from '../../assets/img/github-10-xxl.png'
import { useHistory } from 'react-router-dom'





export const Login = () => {
const history =useHistory()
const dispatch = useDispatch()

const state = useSelector( state => state)
const githubUser = useSelector((state) => state.rootReducer.githubUser);  

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
  if(state === true){
    history.push('/')
  } 
}
const handleGithubLogin = () => {
  window.open('http://localhost:3001/api/github', '_self') // si funciona deployado seria un golazo
  dispatch(getGithubUserInfo())
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

  console.log('ESTADO GLOBAL GH USER',githubUser)

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

       {/*  {log.msgError && (
        <div >{log.msgError}</div>
      )} */}

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
          <button
          className="github-btn"
          onClick={handleGithubLogin}
        >
          <div className="github-icon-wrapper">
            <img height='25px' width='25px'
              className="icon"
              src={githubIcon}
              alt=""
            />
          </div>
        <p className="btn-text">
              <b>Entrar con GitHub</b>
            </p>
          <p />

          </button>
        </form>
      </div>
    );
}
