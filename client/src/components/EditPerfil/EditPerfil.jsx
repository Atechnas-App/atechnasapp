import "./EditPerfil.css"
import { useDispatch, useSelector } from "react-redux"
import Nav from "../Nav/Nav"
import { useEffect, useState } from "react"
import {editProfile, getCategories, getTechnologies} from "../../actions/actions"


export default function EditPerfil(props){

const dispatch = useDispatch()
const id = props.match.params.id

useEffect(() => {
    dispatch(getCategories())
    dispatch(getTechnologies())    
}, [dispatch])

const technologies = useSelector((state) => state.rootReducer.technologie)
const categories = useSelector((state) => state.rootReducer.categories)
const detail = useSelector((state) => state.rootReducer.details)

console.log(detail, "Hola soy el DETAIL")
console.log(detail.categories[0].category, "Hola soy la categoria")

const [editedProfile, setEditedProfile] = useState({
    description : "",
    company : "",
    phone : "",
    profilePicture : "",
    portfolio : "",
    location : "" , //Google maps
    categories : [],
    technologies : [],
    languages : []    
})

function onHandleChange(e){
    e.preventDefault()
    setEditedProfile({
        ...editedProfile,
        [e.target.name] : e.target.value
    })
}

function onSubmit(e){
    e.preventDefault()
    dispatch(editProfile(id, editedProfile))
    alert("Los cambios se guardaron correctamente")
}

function onHandleCheck(e){
    e.preventDefault()
    if(e.target.checked){
        setEditedProfile({
            ...detail,
            ...editedProfile,
            categories : editedProfile.categories.concat(e.target.value)
        })
    }else{
        setEditedProfile({
            ...detail,
            ...editedProfile,
            categoiries : editedProfile.categories?.filter((cat) => cat !== e.target.value) 
        })
    }
}

    return(
        <div className="editperfil-container">
            <Nav/>
            <h1>PERFIL</h1>
            <form onSubmit={(e)=>onSubmit(e)}>
                <label>Nombre</label>
                <input type="text" placeholder={detail.name} disabled></input>
                <label>Apellido</label>
                <input type="text" placeholder={detail.lastName} disabled></input>
                <label>Empresa</label>
                <input type="text" placeholder={detail.company} onChange={(e) => onHandleChange(e)} value={editedProfile.company} name="company"></input>
                <label>Descripcion</label>
                <textarea maxlength="255" placeholder={detail.description} onChange={(e) => onHandleChange(e)} value={editedProfile.description} name="description"></textarea>
                <label>Ubicación</label>
                <input type="text" placeholder={detail.location} onChange={(e) => onHandleChange(e)} value={editedProfile.location} name="location"></input>
                <label>E-mail</label>
                <input type="email" placeholder={detail.email} disabled></input>
                <label>Contraseña</label>
                <input type="password" placeholder="••••••••••"></input>
                <label>Confirmar contraseña</label>
                <input type="password" placeholder="••••••••••"></input>
                <label>Link Portfolio</label>
                <input type="url" placeholder={detail.portfolio} onChange={(e) => onHandleChange(e)} value={editedProfile.portfolio} name="portfolio"></input>
                <label>Telefono</label>
                <input type="tel" placeholder={detail.phone} onChange={(e) => onHandleChange(e)} value={editedProfile.phone} name="phone"></input>
                <label>Idiomas</label>
                <select>
                    {detail.languages.length>0?detail.languages.map((e)=>{
                        return <option>{e.languages}</option>
                    }):<option value="Sin idioma">Sin idiomas especificados</option>}
                </select>
                <label>Categoría</label>
                {detail.categories?detail.categories.map((e)=>{
                        return (
                            <div>
                                <input type="checkbox" value={e.category} key={e.category} name="category" checked/>
                                <label>{e.category}</label>
                            </div>
                        )
                    }):"Sin categoria"}
                
                <label>Keywords</label>
                <input></input>
                <label>Imagen</label>
                <button>Subir</button>
                <img alt="img not found"></img>
                <hr></hr>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}