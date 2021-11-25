import React from 'react'

export const Login = () => {
    return (
      <div>
        <h1>Entrar</h1>
        <span>E-mail</span>
        <input type="text" name="Email" placeholder="Email" />
        <span>Contraseña</span>
        <input
          type="text"
          name="Password"
          placeholder="atechnas@atechnas.com"
        />
        <a href="/">¿Olvidaste tu contraseña?</a>
        <p />
        <button>Entrar</button>

        <div
          className="google-btn"
          /* onClick={handleGoogleLogin}
          disabled={loading} */
        >
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    );
}
