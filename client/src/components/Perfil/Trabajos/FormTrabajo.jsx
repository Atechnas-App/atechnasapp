import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { postJobs } from '../../../actions/actions'
import { Link, useHistory } from 'react-router-dom'
import "./form.css"
import "../../EditPerfil/EditPerfil.css";
import Nav from '../../Nav/Nav'

export default function FormTrabajo(props){

const id = props.match.params.id
const history = useHistory()
   const dispatch = useDispatch()
    const [formulary, setFormulary] = useState({
        title:'',
        image:[],
        description:'',
        price:'',
        state:"Activo"
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
Swal.fire({
    title: 'Cargando imagen',
    allowOutsideClick: false,
    onBeforeOpen: () => {
        Swal.showLoading();
        }
    })


    const res = await fetch(
      "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
      options
    );
    const res_1 = await res.json();

    Swal.close()
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
Swal.fire({
    title: 'Cargando imagen',
    allowOutsideClick: false,
    onBeforeOpen: () => {
        Swal.showLoading();
        }
    })


    const res = await fetch(
      "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
      options
    );
    const res_1 = await res.json();

    Swal.close()
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
Swal.fire({
    title: 'Cargando imagen',
    allowOutsideClick: false,
    onBeforeOpen: () => {
        Swal.showLoading();
        }
    })


    const res = await fetch(
      "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
      options
    );
    const res_1 = await res.json();

    Swal.close()
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
        if(ifFormIsValid()) {
           Swal.fire({ 
               title: '¿Estas seguro?',
               text: "¡No podrás revertir esto!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: '¡Sí, crear trabajo!'
             }).then((result) => {
               if (result.value) {
                 dispatch(postJobs(id,formulary))
                 Swal.fire(
                   '¡Creado!',
                   'El trabajo ha sido creado.',
                   'success'
                 )
                 history.push('/miPerfil/'+id)
                 Swal.close()
           setFormulary({
               title: '',
               image: [],
               description: '',
               price:'',
               state: 'Activo'
           })
           }
          })
        }
    }

  const ifFormIsValid = () => {
      if (formulary.title?.length > 0 && formulary.image?.length > 0 && formulary.description?.length > 0 && formulary.price?.length > 0) {
          return true
      } else {
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Por favor, completa todos los campos!',
      })
               return false
      }
    }

    return (
      <div className='form-conatiner-trabajo'>
      <Nav/>
      <div className="container-crear">
        <form onSubmit={onSubmitTrabajos}>
          <div className="title">
            <label className='label-edit-work'>Título del trabajo</label>
            
            <input className="input-edit" type="text" name="title" onChange={onInputChange} value={formulary.title}/>
          </div>
          <label className='label-edit-work img-form'>Imagenes</label>
            <div className="images">
              <div className="foto-perfil-container">
                <input type="file" name="image" id="fotoPerfil" style={{ display: "none" }} onChange={(e) => loadImg(e.target.files[0])}/>
                <img src={formulary.image[0]} alt="img not found" className="img-edit-perfil"></img>
                <button className="boton-perfil" type="submit" onClick={handleImageClick} cursor="pointer">
                  Subir
                </button>
              </div>
              <div className="foto-perfil-container">
                <input type="file" name="image" id="fotoPerfil1" style={{ display: "none" }} onChange={(e) => loadImg1(e.target.files[0])}/>
                <img src={formulary.image[1]} alt="img not found" className="img-edit-perfil"></img>
                <button className="boton-perfil" type="submit" onClick={handleImageClick1} cursor="pointer">
                  Subir
                </button>
              </div>
              <div className="foto-perfil-container">
                <input type="file" name="image" id="fotoPerfil2" style={{ display: "none" }} onChange={(e) => loadImg2(e.target.files[0])}/>
                <img src={formulary.image[2]} alt="img not found" className="img-edit-perfil"></img>
                <button className="boton-perfil" type="submit" onClick={handleImageClick2} cursor="pointer">
                  Subir
                </button>
              </div>
            </div>
            <div className="descripcion-container">
            <label  className='label-edit-work'>Descripción</label>
              
              <textarea className="input-edit" name="description" onChange={onInputChange} value={formulary.description}/>
            </div>
            <div>
            <label  className='label-edit-work'>Precio</label>
              
              <input placeholder='$'  className="input-edit precio-form" min="0" type="number" name="price" value={formulary.price} onChange={onInputChange}/>
            </div>
            <div className="botons">
              <Link to={"/perfil/edit/"+ id}>
                <button className="boton-perfil" type="submit">
                  Regresar
                </button>
              </Link>
              <button type="submit" className="boton-perfil" onClick={onSubmitTrabajos}>
                Guardar
              </button>
            </div>
        </form>
      </div>
   </div>
   );
}


