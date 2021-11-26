import Persona1 from "../../../../assets/img/Persona1.png"
export default function UsersCard(){
    return(
        <div>
            <div>
                <img src={Persona1} alt="img not found"/>
                <h1>Nombre</h1>
                <h2>Keywords</h2>
                <h2>Puntuacion</h2>
            </div>
        </div>
    )
}