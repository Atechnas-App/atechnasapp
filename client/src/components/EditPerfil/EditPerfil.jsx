import "./EditPerfil.css"
import { useSelector } from "react-redux"
import Nav from "../Nav/Nav"

export default function EditPerfil(props){

const detail = useSelector((state) => state.rootReducer.details)


    return(
        <div className="editperfil-container">
            <Nav/>
            <h1>PERFIL</h1>
            <form>
                <label>Nombre</label>
                <input type="text" placeholder={detail.name} disabled></input>
                <label>Apellido</label>
                <input type="text" placeholder={detail.lastName} disabled></input>
                <label>Descripcion</label>
                <textarea maxlength="255" placeholder={detail.description}></textarea>
                <label>E-mail</label>
                <input type="email" placeholder={detail.email} disabled></input>
                <label>Contraseña</label>
                <input type="password" placeholder="••••••••••"></input>
                <label>Confirmar contraseña</label>
                <input type="password" placeholder="••••••••••"></input>
                <label>Link Portfolio</label>
                <input type="url" placeholder={detail.portfolio}></input>
                <label>Idiomas</label>
                <select>
                    {detail.languages.length>0?detail.languages.map((e)=>{
                        return <option>{e.languages}</option>
                    }):<option value="Sin idioma">Sin idiomas especificados</option>}
                </select>
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