import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { editJob, getDetailJob} from '../../../actions/actions'
import Nav from '../../Nav/Nav'
import "./form.css"

export default function EditarTrabajo(props){
    const dispatch = useDispatch()
    const history = useHistory()
    const detailJobs = useSelector(state=>state.rootReducer.detailJob)
    const id = props.match.params.id
    
    useEffect(()=>{
        dispatch(getDetailJob(id))
      },[dispatch,id])

   console.log(id, "id editar trabajo")
   console.log(detailJobs.image, "detalle trabajo")
    const [editedJob, setEditedJob] = useState({
        title: detailJobs.title,
        image: detailJobs.image,
        about: detailJobs.about,
        price: detailJobs.price,
        paused: detailJobs.paused,
    })
console.log(editedJob, "editedJOB")
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
console.log(res_1, "RES")
    {Swal.close()}
    return setEditedJob((prev) => ({
      ...prev,
      image: [...prev.image,res_1.secure_url]
    }));
  } catch (err) {
    return console.log(err);
  }
};

// function handleDelete(el) {
//   setEditedJob({
//     ...editedJob,
//     image: editedJob.image.filter((img) => img !== el),
//   });
// }

//dos
// const loadImg1 = async (files) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(files);

//   const formData = new FormData();
//   formData.append("file", files);

//   formData.append("upload_preset", "Atechnas");
//   const options = {
//     method: "POST",
//     body: formData,
//   };
//   try {
// {Swal.fire({
//     title: 'Cargando imagen',
//     onBeforeOpen: () => {
//         Swal.showLoading();
//         }
//     })}


//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
//       options
//     );
//     const res_1 = await res.json();

//     {Swal.close()}
//     return setEditedJob((prev) => ({
//       ...prev,
//       image: [...prev.image,res_1.secure_url]
//     }));
//   } catch (err) {
//     return console.log(err);
//   }
// };

// //tres
// const loadImg2 = async (files) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(files);

//   const formData = new FormData();
//   formData.append("file", files);

//   formData.append("upload_preset", "Atechnas");
//   const options = {
//     method: "POST",
//     body: formData,
//   };
//   try {
// {Swal.fire({
//     title: 'Cargando imagen',
//     onBeforeOpen: () => {
//         Swal.showLoading();
//         }
//     })}


//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/Atechnas/image/upload",
//       options
//     );
//     const res_1 = await res.json();

//     {Swal.close()}
//     return setEditedJob((prev) => ({
//       ...prev,
//       image: [...prev.image, res_1.secure_url],
//     }));
//   } catch (err) {
//     return console.log(err);
//   }
// };
//terminan peticiones a cloudinary

 const handleImageClick = (e) => {
   e.preventDefault();
   document.querySelector("#fotoPerfil")?.click()
 };
//  const handleImageClick1 = (e) => {
//    e.preventDefault();
//    document.querySelector("#fotoPerfil1")?.click()
//  };
//  const handleImageClick2 = (e) => {
//    e.preventDefault();
//    document.querySelector("#fotoPerfil2")?.click()
//  };
 
 
 const onInputChange = (e) => {
     e.preventDefault()
     setEditedJob({
         ...editedJob,
         [e.target.name]: e.target.value,
        })
    }
    
  function onInputSelect(e){
    e.preventDefault()
    setEditedJob({
      ...editedJob,
      paused: e.target.value,
    })
  }

    const onSubmitEditTrabajo= async (e) => {
        e.preventDefault();
        dispatch(editJob(id,{
            ...editedJob
        }))
        console.log("trabajo editado", editedJob)
        Swal.fire('TRABAJO ACTUALIZADO',
        "Los cambios se guardaron correctamente",
        "success");
        history.push("/trabajos/detalle/"+id)
        }

        function handleDelete(img){
          setEditedJob({
            ...editedJob,
            image: editedJob.image.filter(i => i !== img)
          })
        }
    

    return (<div>
      <Nav/>
      <div className="container">
        <form onSubmit={e => onSubmitEditTrabajo(e)}>
          <div>
            <label>Titulo</label>
            <input
              type="text"
              name="title"
              onChange={e => onInputChange(e)}
              value={editedJob.title}
            />
          </div>
           <div className="images">
                <div className="foto-perfil-container">
                <label className="input-label">Imagenes</label>
                <hr className="hr-perfil-verde"></hr>
             {editedJob?.image? editedJob?.image?.map((img,i) => {
               return (<div>
                <input
                  type="file"
                  name="image"
                  id="fotoPerfil"
                   style={{ display: "none" }}
                  onChange={(e) => loadImg(e.target.files[i])}
                />
                <img
                  src={img}
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
             )}):
             <>
             <input
             type="file"
             name="image"
             id="fotoPerfil"
              style={{ display: "none" }}
             onChange={(e) => loadImg(e.target.files)}
           />
           <img
             src=""
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
              </>}
             </div>
             {/*  <div className="foto-perfil-container">
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
                  src={editedJob.image[0]}
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
                  src={editedJob.image[1]}
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
                  onChange={(e) => loadImg2(e.target.files[1])}
                />
                <img
                  src={editedJob.image[2]}
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
                </div> */}
              </div>
              <div className="desc">
                <label>Descripcion</label>
                <textarea
                className="descripcion"
                  name="about"
                  onChange={onInputChange}
                  value={editedJob.about}
                />
                </div>
                <div>
                <label>Precio</label>
                <span className="currencyinput">
                  $      
                  <input
                    className="currencyinputPrice"
                    type="number"
                    name="price"
                    value={editedJob.price}
                    onChange={onInputChange}
                  />
                </span>
                <div>
                <label>Pausado: </label>
                <select onChange={onInputSelect}>
                  <option selected disabled>Selecciona una opción:</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
                </div>
                </div>
                <button type="submit">
                  Guardar
                </button>
        </form>
      </div>
      </div>
    );
}


