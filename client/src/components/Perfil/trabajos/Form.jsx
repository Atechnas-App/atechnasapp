import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { postJobs } from '../../../actions/actions'
import "./form.css"

export const Form = (props) => {

const id = props.match.params.id

   const dispatch = useDispatch()
    const [formulary, setFormulary] = useState({
        title:'',
        image:[],
        about:'',
        price:'',
        paused:false
    })
console.log(formulary)
//uno
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
{Swal.fire({
    title: 'Cargando imagen',
    onBeforeOpen: () => {
        Swal.showLoading();
        }
    })}


    const res = await fetch(
      "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
      options
    );
    const res_1 = await res.json();

    {Swal.close()}
    return setFormulary((prev) => ({
      ...prev,
      image: [...prev.image,res_1.secure_url]
    }));
  } catch (err) {
    return console.log(err);
  }
};


//dos
const loadImg1 = async (files) => {
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
{Swal.fire({
    title: 'Cargando imagen',
    onBeforeOpen: () => {
        Swal.showLoading();
        }
    })}


    const res = await fetch(
      "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
      options
    );
    const res_1 = await res.json();

    {Swal.close()}
    return setFormulary((prev) => ({
      ...prev,
      image: [...prev.image,res_1.secure_url]
    }));
  } catch (err) {
    return console.log(err);
  }
};

//tres
const loadImg2 = async (files) => {
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
{Swal.fire({
    title: 'Cargando imagen',
    onBeforeOpen: () => {
        Swal.showLoading();
        }
    })}


    const res = await fetch(
      "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
      options
    );
    const res_1 = await res.json();

    {Swal.close()}
    return setFormulary((prev) => ({
      ...prev,
      image: [...prev.image, res_1.secure_url],
    }));
  } catch (err) {
    return console.log(err);
  }
};
//terminan peticiones a cloudinary

 const handleImageClick = (e) => {
   e.preventDefault();
   document.querySelector("#fotoPerfil")?.click()
 };
 const handleImageClick1 = (e) => {
   e.preventDefault();
   document.querySelector("#fotoPerfil1")?.click()
 };
 const handleImageClick2 = (e) => {
   e.preventDefault();
   document.querySelector("#fotoPerfil2")?.click()
 };
 
 
 const onInputChange = (e) => {
     setFormulary({
         ...formulary,
         [e.target.name]: e.target.value,
        })
    }
    
    const onSubmitTrabajos= async (e) => {
        e.preventDefault();
        dispatch(postJobs(id,formulary))
        alert('Trabajo publicado')
        setFormulary({
            title: '',
            image: [],
            about: '',
            price:'',
            paused: false
        })
        }

    return (
      <div className="container">
        <form onSubmit={onSubmitTrabajos}>
          <div>
            <label>Titulo</label>
            <input
              type="text"
              name="title"
              onChange={onInputChange}
              value={formulary.title}
            />
            <div className="images">
              <div className="foto-perfil-container">
                <label className="input-label">Foto de perfil</label>
                <hr className="hr-perfil-verde"></hr>
                <input
                  type="file"
                  name="image"
                  id="fotoPerfil"
                   style={{ display: "none" }}
                  onChange={(e) => loadImg(e.target.files[0])}
                />
                <img
                  src={formulary.image[0]}
                  alt="img not found"
                  className="img-edit-perfil"
                ></img>
                <button
                  className="boton-perfil"
                  type="submit"
                  onClick={handleImageClick}
                  cursor="pointer"
                >
                  Subir
                </button>
              </div>
              <div className="foto-perfil-container">
                <label className="input-label">Foto de perfil</label>
                <hr className="hr-perfil-verde"></hr>
                <input
                  type="file"
                  name="image"
                  id="fotoPerfil1"
                  style={{ display: "none" }}
                  onChange={(e) => loadImg1(e.target.files[0])}
                />
                <img
                  src={formulary.image[1]}
                  alt="img not found"
                  className="img-edit-perfil"
                ></img>
                <button
                  className="boton-perfil"
                  type="submit"
                  onClick={handleImageClick1}
                  cursor="pointer"
                >
                  Subir
                </button>
              </div>
              <div className="foto-perfil-container">
                <label className="input-label">Foto de perfil</label>
                <hr className="hr-perfil-verde"></hr>
                <input
                  type="file"
                  name="image"
                  id="fotoPerfil2"
                  style={{ display: "none" }}
                  onChange={(e) => loadImg2(e.target.files[0])}
                />
                <img
                  src={formulary.image[2]}
                  alt="img not found"
                  className="img-edit-perfil"
                ></img>
                <button
                  className="boton-perfil"
                  type="submit"
                  onClick={handleImageClick2}
                  cursor="pointer"
                >
                  Subir
                </button>
              </div>
              <div className="desc">
                <label>Descripcion</label>
                <textarea
                className="descripcion"
                  name="about"
                  onChange={onInputChange}
                  value={formulary.about}
                />
                <label>Precio</label>
                <span className="currencyinput">
                  $      
                  <input
                    className="currencyinputPrice"
                    type="number"
                    name="price"
                    value={formulary.price}
                    onChange={onInputChange}
                  />
                </span>

                <button type="submit" onClick={onSubmitTrabajos}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}


