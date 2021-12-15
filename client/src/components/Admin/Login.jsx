import Nav from './Navbar/Nav'
import "./Login.css"

export default function LoginAdmin(){
    return (
        <div>
            <Nav/>
            <div className='login-admin-container'>
            <h1 className='titulo-login-admin'>LOGIN ADMIN</h1>
                <form>
                    <div className='label-input-login-admin'>
                        <label>Usuario</label>
                        <input type="text"></input>
                    </div>
                    <div className='label-input-login-admin'>
                        <label>Contraseña</label>
                        <input type="password"></input>
                    </div>
                    <button className='button-login-admin'>Ingresar</button>
                </form>
            </div>
        </div>
    )
}