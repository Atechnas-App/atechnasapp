import { Link } from "react-router-dom";
import './CardPeople.css'
//Card de cada uno 
export default function CardPeople({profilePicture,lastName, name, technology,qualification, id, categories}){
    console.log('CARD INFO', `${name} ${profilePicture} ${lastName} category: ${categories} Technology: ${technology}`)
    return(
        <div>
            <div className='contenedorCard'>
                <img src={profilePicture} alt="img not found" className='imgCard' />
                <p className='nombreCard'> {name} {lastName}</p>
                {Array.isArray(categories)? categories?.map((e) =>{ return(<p>{e.category}</p>)}) : categories}
                <p>{technology? technology?.map((e) => e) : 'Javascript | React | Readux | Node.js'}</p>
                <p>{qualification}</p>
                <Link to={"/" + id}><button className='botonDetalleCard'>Mas Detalles</button></Link>
            </div>
        </div>
    )
}