import "./EditPerfil.css"
import { useDispatch, useSelector } from "react-redux"
import Nav from "../Nav/Nav"
import { useEffect, useState } from "react"
import {editProfile, getCategories, getDetails, getTechnologies} from "../../actions/actions"


export default function EditPerfil(props){




const dispatch = useDispatch()
const id = props.match.params.id
const technologies = useSelector((state) => state.rootReducer.technologie)
const categories = useSelector((state) => state.rootReducer.categories)
const detail = useSelector((state) => state.rootReducer.details)
const userCategories = detail.categories?.map((e)=>e.category)
const userTechnologies = detail.technologies?.map((e)=>e.technology)
const userLanguages = detail.languages?.map((e)=>e.languages)
const categoriesToAdd = categories?.filter(c => !userCategories.includes(c.category))
console.log(categoriesToAdd)

useEffect(() => {
    dispatch(getCategories())
    dispatch(getTechnologies())
    
    dispatch(getDetails(id))    
}, [dispatch])

const [editedProfile, setEditedProfile] = useState({
    description : detail.description,
    company : detail.company,
    phone : detail.phone,
    profilePicture : detail.profilePicture,
    portfolio : detail.portfolio,
    location : detail.location, //Google maps
    categories : userCategories,
    technologies : userTechnologies,
    languages : userLanguages    
})

const loadImg = async (files) => {
  const reader = new FileReader();
  reader.readAsDataURL(files);

  const formData = new FormData();
  formData.append("file", files);

  formData.append("upload_preset", "Atechnas");
  const options = {
    method: "POST",
    body: formData,
  };
  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
      options
    );
    const res_1 = await res.json();

    return setEditedProfile((prev) => ({
      ...prev,
      profilePicture: res_1.secure_url,
    }));
  } catch (err) {
    return console.log(err);
  }
};

const handleImageClick = (e) => {
  e.preventDefault();
  document.querySelector("#fotoPerfil").click();
}; 

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
            categories : editedProfile.categories?.filter((cat) => cat !== e.target.value) 
        })
    }
}

    return (
      <div className="editperfil-container">
        <Nav />
        <h1>PERFIL</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            value={detail.name}
            disabled
          ></input>
          <label>Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            value={detail.lastName}
            disabled
          ></input>
          <label>Empresa</label>
          <input
            type="text"
            placeholder="Empresa"
            onChange={(e) => onHandleChange(e)}
            value={editedProfile.company}
            name="company"
          ></input>
          <label>Descripcion</label>
          <textarea
            maxLength="255"
            placeholder="Escribe una breve descripción sobre ti"
            onChange={(e) => onHandleChange(e)}
            value={editedProfile.description}
            name="description"
          ></textarea>
          <label>Ubicación</label>
          <input
            type="text"
            placeholder="Seleccioná tu ubicacion"
            onChange={(e) => onHandleChange(e)}
            value={editedProfile.location}
            name="location"
          ></input>
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={detail.email}
            disabled
          ></input>
          <label>Contraseña</label>
          <input type="password" placeholder="••••••••••" disabled></input>
          <button>Cambia tu contraseña</button>
          <label>Link Portfolio</label>
          <input
            type="url"
            placeholder="URL Porfolio"
            onChange={(e) => onHandleChange(e)}
            value={editedProfile.portfolio}
            name="portfolio"
          ></input>
          <label>Telefono</label>
          <input
            type="tel"
            placeholder="Teléfono"
            onChange={(e) => onHandleChange(e)}
            value={editedProfile.phone}
            name="phone"
          ></input>
          <label>Idiomas</label>
          <div>
            {detail.languages?.length > 0 ? (
              detail.languages?.map((e) => {
                return <button>{e.languages}</button>;
              })
            ) : (
              <option value="Sin idioma">Seleccionar idioma/s</option>
            )}
          </div>
          <label>Categoría</label>
          <div>
            {detail.categories
              ? detail.categories.map((e) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        value={e.category}
                        key={e.category}
                        name="category"
                        onChange={(e) => onHandleCheck(e)}
                        defaultChecked
                      />
                      <label>{e.category}</label>
                    </div>
                  );
                })
              : "Sin categoria"}
          </div>
          <div>
            {categoriesToAdd?.map((e) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    value={e.category}
                    key={e.category}
                    name="category"
                    onChange={(e) => onHandleCheck(e)}
                  />
                  <label>{e.category}</label>
                </div>
              );
            })}
          </div>
          <label>Keywords</label>
          <label>Imagen</label>
          <input
            type="file"
            name="profilePicture"
            id="fotoPerfil"
            style={{ display: "none" }}
            onChange={(e) => loadImg(e.target.files[0])}
          />
          <button type="submit" onClick={handleImageClick} cursor="pointer">
            Subir
          </button>
          <img
            src={editedProfile.profilePicture}
            alt="img not found"
            width="250vw"
            height="250vh"
          ></img>
          <hr></hr>
          <button>Guardar</button>
        </form>
      </div>
    );
}