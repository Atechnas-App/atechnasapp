import './Error404.css'
import notFound from '../../assets/img/Error404.png'

export default function Error404(){
    return(
        <div className='error404-container'>
                <h1 className='error-titulo'>Ooops algo salio mal...</h1>
                <img className='errorImg' src={notFound} alt=""></img>
                <h1>Serás redirigido a la pagina principal...</h1>
        </div>
    )
}