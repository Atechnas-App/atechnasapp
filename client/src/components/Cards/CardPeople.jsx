import { Link } from "react-router-dom";
import './CardPeople.css'
//Card de cada uno 
export default function CardPeople({profilePicture,lastName, name, technology,qualification, id, categories}){
    
    localStorage.setItem('idgit', id)
    return(
        <div className= 'contenedorCard border-card btn btn-white btn-bottom-animation-1 btn-animation-1'>
            <div>
                <div className='contenedor-img-card'>
                <img src={profilePicture} alt="img not found" className='imgCard' />
                <p className='nombreCard'> {name} {lastName}</p>
                <div className="container-categorias">
                {categories?.map((e) =>{ 
                    return(<h3 className="categorias-text">| {e.category} |</h3>)
                    }) 
                }
                </div>
                <div className="container-tecnologias">
                {technology?.map((e) => {
                    return (<p className="tecnologias-text">| {e.technology} |</p>)
                    })
                }
                </div>
                <p>{qualification}</p>

                <div>
                <Link to={`/perfil/${id}`}><button className='botonDetalleCard'>Mas Detalles</button></Link>
                </div>

            </div>
        </div>
        </div>
    )
}