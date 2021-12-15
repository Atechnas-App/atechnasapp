import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import {
  postLogin,
  removeError1,
  setError1,
  startGoogleLogin,
/*   getGithubUserInfo */
} from "../../actions/actions";
import validator from 'validator'
import "./form.css"
import githubIcon from '../../assets/img/github-10-xxl.png'
import { useHistory } from 'react-router-dom'





export const Login = () => {
const history =useHistory()
const dispatch = useDispatch()
const {auth,msgError1} = useSelector((state) => state.logued);  


  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  })

  const { email, password } = formValues
  const loginErrorMessage = JSON.parse(localStorage.getItem('user'))
  console.log(loginErrorMessage, 'loginErrorMessage')



  const handleLogin = (e) => {
    e.preventDefault()
    // if (!typeof loginErrorMessage === 'string')
      if (ifFormIsValid()) {
        dispatch(postLogin(formValues));
        if (localStorage.getItem("user", "id")) {
          history.push('/')
        }
      }
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
    if (auth === true) {
      window.location.replace('/')
    }
  }
  const handleGithubLogin = () => {
    window.open('https://atechnas-api.herokuapp.com/api/github'/* , '_self' */) // si funciona deployado seria un golazo
    // dispatch(getGithubUserInfo())
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

  /* console.log('ESTADO GLOBAL GH USER', githubUser) */

  return (

    <div className='entrarContainer'>
      <h1 className='tituloRegister'>ENTRAR</h1>
      {/* LOGIN LOCAL  */}
      {/* {loginErrorMessage && <p>{loginErrorMessage}</p>} */}
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

        {msgError1 && (
          <div >{msgError1}</div>
        )}

        <p />
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
