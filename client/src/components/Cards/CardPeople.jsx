import { Link } from "react-router-dom";
//Card de cada uno 
export default function CardPeople({profilePicture,lastName, name, technology,qualification, id}){
    return(
        <div>
            <div>
                <img src={profilePicture} alt="img not found"/>
                <p>{name} {lastName}</p>
                <p>{technology}</p>
                <p>{qualification}</p>
                <Link to={"/" + id}><button >Mas Detalles</button></Link>
            </div>
        </div>
    )
}