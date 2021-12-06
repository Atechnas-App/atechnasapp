import "./Perfil.css"
import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { getDetails } from "../../actions/actions";
import Nav from "../Nav/Nav"
import { Link } from "react-router-dom";
import CardTrabajo from "./CardTrabajo/CardTrabajo"
import CardComentario from "./CardComentario/CardComentario"

export default function Perfil(props){
const dispatch = useDispatch()
const detail = useSelector((state) => state.rootReducer.details)
const {id} = JSON.parse(localStorage.getItem("user")); 
const id1 = localStorage.getItem('idgit')
console.log(id1)

let fullId = props.match.params.id

useEffect(() => {
    dispatch(getDetails(fullId, id, id1))
}, [dispatch]);

console.log(detail.categories, "Hay categorias?")

    return(
        <div className="perfil-container">
            <Nav/>
            <div className="datos-perfil">
                <div className="foto-perfil">
                    <div>
                        <img src={detail.profilePicture} alt="img not found" width="250vw" height="250vh"></img>
                        {/* <div>{detail.categories?detail.categories[0].category:"Usuario sin categoria"}{detail.qualification}</div> */}
                    </div>
                    <div>
                        <form>
                            <Link to={`/editPerfil/${fullId, id, id1}`}>
                                <button>Editar Perfil</button>
                            </Link>
                            <button>Mensaje</button> 
                            <button>Contratar</button>
                        </form>
                    </div>
                </div>
                <div className="descripcion-perfil">
                    <h1>{detail.name} {detail.lastName}</h1>
                    <h4></h4>
                    <p>{detail.description}</p>
                    <a href={detail.portfolio}>Portfolio</a>
                    <div>{detail.technologies?detail.technologies.map((e)=>{
                        return <h3>{e.technology}</h3>
                    }):"Sin keywords"}</div>
                </div>
            </div>
            <div className="trabajos-perfil">
                <div>
                    <h1>Mis trabajos</h1>
                </div>
                <div>
                    <CardTrabajo/>
                </div>
            </div>
            <div className="comentarios-perfil">
            <div>
                    <h1>Cometarios</h1>
                </div>
                <div>
                    <CardComentario/>
                </div>
            </div>
        </div>
    )
}