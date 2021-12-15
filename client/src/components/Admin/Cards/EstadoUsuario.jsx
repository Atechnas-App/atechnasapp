export default function EstadoUsario({profilePicture, name, lastName, status}){


    return(
        <div>
            <img src={profilePicture} alt="img not found"></img>
            <h3>{name} {lastName}</h3>
        </div>
    )
}