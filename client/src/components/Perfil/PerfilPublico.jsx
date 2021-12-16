import "./Perfil.css"
import React, { useState } from "react"
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { getDetails, postReview } from "../../actions/actions";
import Nav from "../Nav/Nav"

import CardTrabajo from "./CardTrabajo/CardTrabajo"
import CardComentario from "./CardComentario/CardComentario"

export default function Perfil(props){
const dispatch = useDispatch()
const detail = useSelector((state) => state.rootReducer.details)
const [reviewUser, setReview] = useState({title:"", qualification:"", coments:""});
const {id} = JSON.parse(localStorage.getItem("user"));


let fullId = props.match.params.id

useEffect(() => {
    dispatch(getDetails(fullId, id))
}, [dispatch, fullId, id]);

function review (e){
    e.preventDefault()
    setReview({
        ...reviewUser,
        [e.target.name]: e.target.value,
       })

}

function onSubmit (e){
    e.preventDefault()
    dispatch(postReview(fullId, reviewUser))
    setReview({

        title:"", qualification:"", coments:""
        
       })
       alert("review creado")

}
    return(
        <div className="perfil-container">
            <Nav/>
        <div className='container-info-perfil'> 
            
            <h1>SOBRE MI</h1>
            <hr className="hr-perfil-verde"></hr>
            <div className="datos-perfil">
                <div className="foto-perfil">
                    <div className="foto-de-perfil">
                        <img className="foto-de-perfil" src={detail.profilePicture} alt="img not found"></img>
                        {/* <div>{detail.categories?detail.categories[0].category:"Usuario sin categoria"}{detail.qualification}</div> */}
                    </div>
                </div>
                <div className="descripcion-perfil">
                    <h1 className="nombre-completo-perfil">{detail.name} {detail.lastName}</h1>
                    <hr className="hr-perfil-violeta"></hr>
                    <div className="contenedor-idiomas">
                    {detail.languages?.map((e)=>{
                        return(
                            <h4 className="idiomas-perfil">{e.languages}</h4>
                        )
                    })}
                    </div>
                    <p className="descripcion-texto">{detail.description}</p>
                    <a href={detail.portfolio}>
                    <button cursor="pointer" className="boton-portfolio">PORTFOLIO</button>
                    </a>
                    <h2>Skills</h2>
                    <hr className="hr-perfil-violeta"></hr>
                    <div className="keyword-container">
                            {detail.technologies?detail.technologies.map((e)=>{
                            return <h3 className="keyword">{e.technology}</h3>
                        }):"Sin keywords"}
                    </div>
                </div>
            </div>
            <div className="trabajos-perfil">
                <div>
                    <h1>MIS TRABAJOS</h1>
                    <hr className="hr-perfil-verde"></hr>
                </div>
                <div>
                    <CardTrabajo id={fullId}/>
                </div>
            </div>
            <div className="comentarios-perfil">
            <div>
                    <h1>COMENTARIOS</h1>
                    <hr className="hr-perfil-verde"></hr>
                </div>
                <form onSubmit={e => onSubmit(e)} className='form-comentarios'>
                    <input className='input-coment block-coment' type="text" value={reviewUser.title} name="title" placeholder="Titulo" onChange={e => review(e)}/>
                    <input className='input-coment block-coment' type="number" min='0' max='5' value={reviewUser.qualification} name="qualification" placeholder="Calificacion" onChange={e => review(e)}/>
                    <textarea className='text-coment block-coment' value={reviewUser.coments} name="coments" placeholder="Comentario" onChange={e => review(e)}/>
                    <button type="submit" className='submit-coment'>Enviar</button>
                </form>
                <div>
                    <CardComentario id={fullId}/>
                </div>
            </div>
        </div>
        </div>
    )
}