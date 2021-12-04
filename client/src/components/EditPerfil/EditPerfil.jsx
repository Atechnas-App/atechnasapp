import "./EditPerfil.css"
import { useDispatch, useSelector } from "react-redux"
import Nav from "../Nav/Nav"
import { useEffect, useState } from "react"
import {editProfile, getCategories, getDetails, getLanguages, getTechnologies} from "../../actions/actions"
import Select from 'react-select'

export default function EditPerfil(props){

    const dispatch = useDispatch()
    const id = props.match.params.id
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getTechnologies())
        dispatch(getLanguages())
        dispatch(getDetails(id))    
    }, [dispatch, id])
const technologies = useSelector((state) => state.rootReducer.technologies)
const categories = useSelector((state) => state.rootReducer.categories)
const languages = useSelector((state) => state.rootReducer.languages)
const detail = useSelector((state) => state.rootReducer.details)
const userCategories = detail.categories.map((e)=>e.category)
const userTechnologies = detail.technologies.map((e)=>e.technology)
const userLanguages = detail.languages.map((e)=>e.languages)
const categoriesToAdd = categories?.filter(c => !userCategories.includes(c.category))
const technologiesToAdd = technologies?.filter(c => !userTechnologies.includes(c.technology))
const languagesToAdd = languages?.filter(c => !userLanguages.includes(c.language))
const addLanguage = languagesToAdd.map(e => {return {value:e.languages, label:e.languages}})
const knowLanguage = userLanguages.map(e => {return {value:e, label:e}})


const [editedProfile, setEditedProfile] = useState({
    description : detail.description,
    company : detail.company,
    phone : detail.phone,
    profilePicture : detail.profilePicture,
    portfolio : detail.portfolio,
    location : detail.location, //Google maps
    categories : userCategories,
    technologies : userTechnologies
})
const [editedLanguage, setEditedLanguage] = useState({
    languages: userLanguages
})
function onHandleChange(e){
    console.log(e)
    e.preventDefault()
    setEditedProfile({
        ...editedProfile,
        [e.target.name] : e.target.value
    })
}

function onSubmit(e){
    e.preventDefault()
    dispatch(editProfile(id, {
        ...editedProfile,
        languages: editedLanguage.map(e => e.value)
    }))
    console.log(editedProfile, "Editado")
    alert("Los cambios se guardaron correctamente")
}

function onHandleCheckCategories(e){
    e.preventDefault()
    if(e.target.checked){
        setEditedProfile({
            ...editedProfile,
            categories : editedProfile.categories.concat(e.target.value)
        })
    }else{
        setEditedProfile({
            ...editedProfile,
            categories : editedProfile.categories?.filter((cat) => cat !== e.target.value) 
        })
    }
}
function onHandleCheckTechnologies(e){
    e.preventDefault()
    if(e.target.checked){
        setEditedProfile({
            ...editedProfile,
            technologies : editedProfile.technologies.concat(e.target.value)
        })
    }else{
        setEditedProfile({
            ...editedProfile,
            technologies : editedProfile.technologies?.filter((tech) => tech !== e.target.value) 
        })
    }
}

    return(
        <div className="editperfil-container">
            <Nav/>
            <h1>PERFIL</h1>
            <form onSubmit={(e)=>onSubmit(e)}>
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" value={detail.name} disabled></input>
                <label>Apellido</label>
                <input type="text" placeholder="Apellido" value={detail.lastName} disabled></input>
                <label>Empresa</label>
                <input type="text" placeholder="Empresa" onChange={(e) => onHandleChange(e)} value={editedProfile.company} name="company"></input>
                <label>Descripcion</label>
                <textarea maxLength="255" placeholder="Escribe una breve descripción sobre ti" onChange={(e) => onHandleChange(e)} value={editedProfile.description} name="description"></textarea>
                <label>Ubicación</label>
                <input type="text" placeholder="Seleccioná tu ubicacion" onChange={(e) => onHandleChange(e)} value={editedProfile.location} name="location"></input>
                <label>Correo electrónico</label>
                <input type="email" placeholder="Correo electrónico" value={detail.email} disabled></input>
                <label>Contraseña</label>
                <input type="password" placeholder="••••••••••" disabled></input>
                <button>Cambia tu contraseña</button>
                <label>Link Portfolio</label>
                <input type="url" placeholder="URL Porfolio" onChange={(e) => onHandleChange(e)} value={editedProfile.portfolio} name="portfolio"></input>
                <label>Telefono</label>
                <input type="tel" placeholder="Teléfono" onChange={(e) => onHandleChange(e)} value={editedProfile.phone} name="phone"></input>
                <label>Idiomas</label>
                <div>
                    <Select defaultValue={knowLanguage} isMulti name="languages" onChange={setEditedLanguage} options={addLanguage}/>
                </div>
                <label>Categoría</label>
                <div>
                    {detail.categories?detail.categories.map((e)=>{
                        return (
                            <div>
                                <input type="checkbox" value={e.category} key={e.category} name="category" onChange={(e) => onHandleCheckCategories(e)} defaultChecked/>
                                <label>{e.category}</label>
                            </div>
                        )
                    }):"Sin categoria"}
                </div>
                <div>
                    {categoriesToAdd?.map((e)=>{
                    return (
                        <div>
                            <input type="checkbox" value={e.category} key={e.category} name="category" onChange={(e) => onHandleCheckCategories(e)}/>
                            <label>{e.category}</label> 
                        </div>
                    )
                })}
                </div>
                    <label>Keywords</label>
                <div>
                    {detail.technologies?detail.technologies.map((e)=>{
                        return (
                            <div>
                                <input type="checkbox" value={e.technology} key={e.technology} name="technology" onChange={(e) => onHandleCheckTechnologies(e)} defaultChecked/>
                                <label>{e.technology}</label>
                            </div>
                        )
                    }):"Sin keywords"}
                </div>
                <div>
                    {technologiesToAdd?.map((e)=>{
                    return (
                        <div>
                            <input type="checkbox" value={e.technology} key={e.technology} name="technology" onChange={(e) => onHandleCheckTechnologies(e)}/>
                            <label>{e.technology}</label> 
                        </div>
                    )
                })}
                </div>
                <label>Imagen</label>
                <button>Subir</button>
                <img alt="img not found" src={detail.profilePicture}></img>
                <hr></hr>
                <input type="submit" value="Guardar"/>
            </form>
        </div>
    )
}