import "./EditPerfil.css"

export default function EditPerfil(){
    return(
        <div className="editperfil-container">
            <h1>PERFIL</h1>
            <form>
                <label>Nombre</label>
                <input type="text"></input>
                <label>Apellido</label>
                <input type="text"></input>
                <label>Descripcion</label>
                <input type="text" maxlength="255"></input>
                <label>E-mail</label>
                <input type="email"></input>
                <label>Contraseña</label>
                <input type="password"></input>
                <label>Link Portfolio</label>
                <input type="url"></input>
                <label>Idiomas</label>
                <input type="select"></input>
                <label>Categoría</label>
                <input type="checkbox"></input>
                <label>Keywords</label>
                <input></input>
                <label>Imagen</label>
                <button>Subir</button>
                <img></img>
                <hr></hr>
                <button>Guardar</button>
            </form>
        </div>
    )
}