import { Link } from "react-router-dom";
import './CardPeople.css'
//Card de cada uno 
export default function CardPeople({profilePicture,lastName, name, technology,qualification, id, categories}){
    
    return(
        <div>
            <div className='contenedorCard'>
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
                    return (<h3 className="tecnologias-text">| {e.technology} |</h3>)
                    })
                }
                </div>
                <p>{qualification}</p>
                <Link to={`/${id}`}>
                    <button className='botonDetalleCard'>Mas Detalles</button>
                </Link>
            </div>
        </div>
    )
}