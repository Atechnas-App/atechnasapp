import "./EditPerfil.css";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import {
  editProfile,
  getCategories,
  getDetails,
  getLanguages,
  getTechnologies,
} from "../../actions/actions";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditPerfil(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTechnologies());
    dispatch(getLanguages());
    dispatch(getDetails(id));
  }, [dispatch, id]);
  const technologies = useSelector((state) => state.rootReducer?.technologies);
  const categories = useSelector((state) => state.rootReducer?.categories);
  const languages = useSelector((state) => state.rootReducer?.languages);
  const detail = useSelector((state) => state.rootReducer?.details);
  const userCategories = detail.categories?.map((e) => e?.category);
  const userTechnologies = detail.technologies?.map((e) => e?.technology);
  const userLanguages = detail.languages?.map((e) => e?.languages);
  const categoriesToAdd = categories?.filter(
    (c) => !userCategories?.includes(c?.category)
  );
  const technologiesToAdd = technologies?.filter(
    (c) => !userTechnologies?.includes(c?.technology)
  );
  const languagesToAdd = languages?.filter(
    (c) => !userLanguages.includes(c?.language)
  );

  const [editedProfile, setEditedProfile] = useState({
    description: detail.description,
    company: detail.company,
    phone: detail.phone,
    profilePicture: detail.profilePicture,
    portfolio: detail.portfolio,
    location: detail.location, //Google maps
    categories: userCategories,
    technologies: userTechnologies,
    languages: userLanguages,
  });

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

  function onHandleChange(e) {
    console.log(e);
    e.preventDefault();
    setEditedProfile({
      ...editedProfile,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(
      editProfile(id, {
        ...editedProfile,
      })
    );
    console.log(editedProfile, "Editado");
    Swal.fire(
      "PERFIL ACTUALIZADO",
      "Los cambios se guardaron correctamente",
      "success"
    );
    history.push("/perfil/" + id);
    Swal.close();
  }

  function onHandleCheckCategories(e) {
    e.preventDefault();
    if (e.target.checked) {
      setEditedProfile({
        ...editedProfile,
        categories: editedProfile.categories?.concat(e.target.value),
      });
    } else {
      setEditedProfile({
        ...editedProfile,
        categories: editedProfile.categories?.filter(
          (cat) => cat !== e.target.value
        ),
      });
    }
  }
  function onHandleCheckTechnologies(e) {
    e.preventDefault();
    if (e.target.checked) {
      setEditedProfile({
        ...editedProfile,
        technologies: editedProfile.technologies?.concat(e.target.value),
      });
    } else {
      setEditedProfile({
        ...editedProfile,
        technologies: editedProfile.technologies?.filter(
          (tech) => tech !== e.target.value
        ),
      });
    }
  }

  function handleDelete(el) {
    setEditedProfile({
      ...editedProfile,
      languages: editedProfile.languages?.filter((lang) => lang !== el),
    });
  }

  function handleSelect(e) {
    setEditedProfile({
      ...editedProfile,
      languages: [...editedProfile.languages, e.target.value],
    });
  }
  return (
    <div className="edit-perfil-container">
      <Nav />
      <h1>PERFIL</h1>
      <hr className="hr-perfil-violeta"></hr>
      <div className="form-container">
        <div className="input-formulario">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="label-input-container">
              <label className="input-label">Nombre</label>
              <hr className="hr-perfil-verde"></hr>
              <input
                type="text"
                placeholder="Nombre"
                value={detail.name}
                disabled
              ></input>
            </div>
            <div className="label-input">
              <label className="input-label">Apellido</label>
              <hr className="hr-perfil-verde"></hr>
              <input
                type="text"
                placeholder="Apellido"
                value={detail.lastName}
                disabled
              ></input>
            </div>
            <div className="label-input">
              <label className="input-label">Empresa</label>
              <hr className="hr-perfil-verde"></hr>
              <input
                type="text"
                placeholder="Empresa"
                onChange={(e) => onHandleChange(e)}
                value={editedProfile.company}
                name="company"
              ></input>
            </div>
            <div className="label-input">
              <label className="input-label">Descripcion</label>
              <hr className="hr-perfil-verde"></hr>
              <textarea
                maxLength="255"
                placeholder="Escribe una breve descripción sobre ti"
                onChange={(e) => onHandleChange(e)}
                value={editedProfile.description}
                name="description"
              ></textarea>
            </div>
            <div className="label-input">
              <label className="input-label">Ubicación</label>
              <hr className="hr-perfil-verde"></hr>
              <input
                type="text"
                placeholder="Seleccioná tu ubicacion"
                onChange={(e) => onHandleChange(e)}
                value={editedProfile.location}
                name="location"
              ></input>
            </div>
            <div className="label-input">
              <label className="input-label">Correo electrónico</label>
              <hr className="hr-perfil-verde"></hr>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={detail.email}
                disabled
              ></input>
            </div>
            <div className="label-input">
              <label className="input-label">Contraseña</label>
              <hr className="hr-perfil-verde"></hr>
              <input type="password" placeholder="••••••••••" disabled></input>
            </div>
            <div className="label-input">
              <button >Cambia tu contraseña</button>
            </div>
            <div className="label-input">
              <label className="input-label">Link Portfolio</label>
              <hr className="hr-perfil-verde"></hr>
              <input
                type="url"
                placeholder="URL Porfolio"
                onChange={(e) => onHandleChange(e)}
                value={editedProfile.portfolio}
                name="portfolio"
              ></input>
            </div>
            <div className="label-input">
              <label className="input-label">Telefono</label>
              <hr className="hr-perfil-verde"></hr>
              <input
                type="tel"
                placeholder="Teléfono"
                onChange={(e) => onHandleChange(e)}
                value={editedProfile.phone}
                name="phone"
              ></input>
            </div>
            <div>
              <label className="input-label">Idiomas</label>
              <hr className="hr-perfil-verde"></hr>
              <div>
                <select onChange={(e) => handleSelect(e)}>
                  <option selected disabled>
                    Seleccioná idioma/s
                  </option>
                  {languagesToAdd?.map((e) => {
                    return (
                      <option
                        value={e.languages}
                        key={e.languages}
                        name="languages"
                      >
                        {e.languages}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="boton-idioma-map">
                {editedProfile.languages?.map((lang) => (
                  <div>
                    <button className="boton-perfil" type="button" onClick={() => handleDelete(lang)}>
                      {lang}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="input-label">Categoría</label>
              <hr className="hr-perfil-verde"></hr>
              <div className="checkbox-container">
                {detail.categories
                  ? detail.categories.map((e) => {
                      return (
                        <div className="all-checkbox">
                          <input
                            type="checkbox"
                            value={e.category}
                            key={e.category}
                            name="category"
                            onChange={(e) => onHandleCheckCategories(e)}
                            defaultChecked
                          />
                          <label>{e.category}</label>
                        </div>
                      );
                    })
                  : "Sin categoria"}
                {categoriesToAdd?.map((e) => {
                  return (
                    <div className="all-checkbox">
                      <input
                        type="checkbox"
                        value={e.category}
                        key={e.category}
                        name="category"
                        onChange={(e) => onHandleCheckCategories(e)}
                      />
                      <label>{e.category}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <label className="input-label">Keywords</label>
              <hr className="hr-perfil-verde"></hr>
              <div className="checkbox-container">
                {detail.technologies
                  ? detail.technologies.map((e) => {
                      return (
                        <div className="all-checkbox">
                          <input
                            type="checkbox"
                            value={e.technology}
                            key={e.technology}
                            name="technology"
                            onChange={(e) => onHandleCheckTechnologies(e)}
                            defaultChecked
                          />
                          <label>{e.technology}</label>
                        </div>
                      );
                    })
                  : "Sin keywords"}
                {technologiesToAdd?.map((e) => {
                  return (
                    <div className="all-checkbox">
                      <input
                        type="checkbox"
                        value={e.technology}
                        key={e.technology}
                        name="technology"
                        onChange={(e) => onHandleCheckTechnologies(e)}
                      />
                      <label>{e.technology}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="boton-submit">
                <button className="boton-perfil" type="submit" value="Guardar">
                Guardar
                </button>
               <Link to={`/perfil/edit/trabajos/${id}`}>
                <button className="boton-perfil" type="submit" >Publicar Trabajo</button>
                </Link>
            </div>
          </form>
        </div>
        <div className="foto-perfil-container">
          <label className="input-label">Foto de perfil</label>
          <hr className="hr-perfil-verde"></hr>
          <input
            type="file"
            name="profilePicture"
            id="fotoPerfil"
            style={{ display: "none" }}
            onChange={(e) => loadImg(e.target.files[0])}
          />
          <img
            src={editedProfile.profilePicture}
            alt="img not found"
            className="img-edit-perfil"
          ></img>
          <button className="boton-perfil" type="submit" onClick={handleImageClick} cursor="pointer">
            Subir
          </button>
        </div>
      </div>
    </div>
  );
}
