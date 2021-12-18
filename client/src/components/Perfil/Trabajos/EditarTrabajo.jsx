import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { editJob, getDetailJob} from '../../../actions/actions'
import Nav from '../../Nav/Nav'
import "../Trabajos/form.css"

export default function EditarTrabajo(props){
    const dispatch = useDispatch()
    const history = useHistory()
    const detailJobs = useSelector(state=>state.rootReducer.detailJob)
    const id = props.match.params.id
    
    useEffect(()=>{
        dispatch(getDetailJob(id))
      },[dispatch,id])

   /* console.log(id, "id editar trabajo") */
   /* console.log(detailJobs.image, "detalle trabajo") */
    const [editedJob, setEditedJob] = useState({
        title: detailJobs?.title,
        image: detailJobs?.image,
        description: detailJobs?.description,
        price: detailJobs?.price,
        state: detailJobs?.state,
    })
/* console.log(detailJobs, "DETAILS JOBS!") */
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
console.log(res_1, "RES")
    Swal.close()
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
        /* console.log("trabajo editado", editedJob) */
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
      <div className="container-edit">
        <form onSubmit={e => onSubmitEditTrabajo(e)}>
          <div className='titulo-edit'>
            <label className='label-edit-work'>Titulo</label> <br/>
            <input
              className="input-edit"
              type="text"
              name="title"
              onChange={e => onInputChange(e)}
              value={editedJob.title}
            />
          </div>
          <input
                  type="file"
                  name="image"
                  id="fotoPerfil"
                   style={{ display: "none" }}
                  onChange={(e) => loadImg(e.target.files[0])}
                />
           <div className="images">
                <div className="foto-perfil-container">
                <label  className='label-edit-work'>Imagenes</label>
                <hr className="hr-perfil-verde"></hr>
             {editedJob?.image? editedJob?.image?.map((img,i) => {
               return (<div>
                <img
                  src={img}
                  alt="img not found"
                  className="img-edit-perfil"
                ></img>
              <button type="button" onClick={() => handleDelete(img)}>Eliminar</button>
               </div>
             )}):
             <div>
             <input
             type="file"
             name="image"
             id="fotoPerfil"
              style={{ display: "none" }}
             onChange={(e) => loadImg(e.target.files[0])}
           />
           <img
             src=""
             alt="img not found"
             className="img-edit-perfil"
           ></img>
              </div>}
              <button
                className="boton-perfil"
                type="submit"
                onClick={handleImageClick}
                cursor="pointer"
              >
                Subir
              </button>
             </div>
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
              <div className="desc">
                <label className='label-edit-work'>Descripción</label>
                <textarea
                className="input-edit"
                  name="description"
                  onChange={onInputChange}
                  value={editedJob.description}
                />
                </div>
                <div className='flex-edit'>
                  <div>
                    <label>Precio: </label>
                    <span >
                           
                      <input
                        className="input-edit"
                        placeholder="$"
                        type="number"
                        name="price"
                        value={editedJob.price}
                        onChange={onInputChange}
                      />
                    </span>
                  </div>
                  <div>
                  <label>Estado: </label>
                <select onChange={onInputSelect} className="input-edit">
                  <option selected disabled>Selecciona una opción:</option>
                  <option value="Activo" className='option-edit-work'>Activo</option>
                  <option value="Pausado" className='option-edit-work'>Pausado</option>
                </select>
                </div>
                </div>
                <button type="submit" className='boton-perfil'>
                  Guardar
                </button>
        </form>
      </div>
      </div>
    );
}


