import "./EstadoUsuario.css"

export default function EstadoUsario({profilePicture, name, lastName, status}){

    return(
        <div className="estado-usuario-container">
            <img className="foto-perfil-estado" src={profilePicture} alt="img not found"></img>
            <h3 className="estado-usuario-nombre">{name} {lastName}</h3>
        </div>
    )
}