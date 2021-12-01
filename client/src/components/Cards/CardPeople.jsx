import { Link } from "react-router-dom";
import './CardPeople.css'
//Card de cada uno 
export default function CardPeople({profilePicture,lastName, name, technology,qualification, id, categories}){
    console.log('CATEGORIAS CARDS', categories)
    return(
        <div>
            <div className='contenedorCard'>
                <img src={profilePicture} alt="img not found" className='imgCard' />
                <p className='nombreCard'>{name.toUpperCase()} {lastName.toUpperCase()}</p>
                {categories?.map((e) =>{ 
                    return(<p>{e.category}</p>)}) 
                }
                <p>{technology? technology?.map((e) => e) : 'Javascript | React | Readux | Node.js'}</p>
                <p>{qualification}</p>
                <Link to={"/" + id}><button className='botonDetalleCard'>Mas Detalles</button></Link>
            </div>
        </div>
    )
}