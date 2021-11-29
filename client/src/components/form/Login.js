import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from '../hooks/useForm'
import {
  postLogin,
  removeError,
  setError,
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../actions/actions";
import validator from 'validator'
import "./form.css"
import {useNavigate } from 'react-router'





export const Login = () => {
const navigate =useNavigate()
const dispatch = useDispatch()

const { log } = useSelector((state) => state);  


const [formValues, handleInputChange] = useForm({
  email:"",
  password:"",
})

const {email, password} = formValues


const handleLogin= (e) => {
  e.preventDefault()
  if(ifFormIsValid()){
    dispatch(startLoginEmailPassword(email, password));
  }
}


const handleGoogleLogin = () => {
  dispatch(startGoogleLogin());
  if(log.auth){
    navigate('/')
  }
  
    
}



const ifFormIsValid = () => {

  if (!validator.isEmail(email)) {
    dispatch(setError("El correo no es correcto"));
    return false;
  } else if (password.trim().length === 0) {
    dispatch(setError("Falta la contraseña"));
    return false;
  }
  dispatch(removeError());
  return true;

  };





    return (
      <div className="entrarContainer">
        
        <h1 className="tituloRegister">ENTRAR</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            <p className="labels">E-mail</p>
            <input
              value={email}
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="Email"
              placeholder="atechnas@atechnas.com"
              className="fields"
            />
          </div>
          <div>
            <p className="labels">Contraseña</p>
            <input
              type="password"
              name="Password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              className="fields"
            />
          </div>
          <a href="/" className="olvido-contraseña">
            ¿Te olvidaste la contraseña?
          </a>
          {log.msgError && (
          <div >{log.msgError}</div>
        )}
          <p />
          <button type="submit" onClick={(e)=>handleLogin(e)} className="botonImg">
            Entrar
          </button>

          <div
            className="google-btn"
            onClick={(e)=>handleGoogleLogin(e)}
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
