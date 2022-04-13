import "./Perfil.css"
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetails } from "../../actions/actions";
import Nav from "../Nav/Nav"
import { Link } from "react-router-dom";
import CardTrabajosPrivado from "./CardTrabajo/CardTrabajosPrivado"


export default function Perfil(props){
const dispatch = useDispatch()
const detail = useSelector((state) => state.rootReducer.details)
const {id} = JSON.parse(localStorage.getItem("user"));


    let fullId = props.match.params.id

useEffect(() => {
    dispatch(getDetails(fullId, id))
}, [dispatch, fullId, id]);


    return (
        <div className="perfil-container">
            <Nav />
        <div className='container-info-perfil'> 
            <h1 className='titulo-linea'>SOBRE MI</h1>
            <hr className="hr-perfil-verde"></hr>
            <div className="datos-perfil">
                <div className="foto-perfil">
                    <div className="foto-de-perfil">
                        <img className="foto-de-perfil" src={detail.profilePicture} alt="img not found"></img>
                        {/* <div>{detail.categories?detail.categories[0].category:"Usuario sin categoria"}{detail.qualification}</div> */}
                    </div>
                    <div>
                        
                        <form className="boton-container">
                            <Link to={`/perfil/editarPerfil/${fullId}`}>
                                <button className="manu-boton-perfil">EDITAR PERFIL</button>
                            </Link>
                            <button className='manu-boton-perfil'> 
                            <a href={`https://auth.mercadopago.com.ar/authorization?client_id=7374106022144969&response_type=code&platform_id=mp&state=${id}&redirect_uri=https://atechnas-api.herokuapp.com/api/authMPrealizado`}
                            className='a-boton-mp'>
                                AUTORIZAR MERCADOPAGO
                            </a>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="descripcion-perfil">
                    <h1 className="nombre-completo-perfil">{detail.name} {detail.lastName}</h1>
                    <hr className="hr-perfil-violeta"></hr>
                    <div className="contenedor-idiomas">
                        {detail.languages?.map((e) => {
                            return (
                                <h4 className="idiomas-perfil">{e.languages}</h4>
                            )
                        })}
                    </div>
                    <p className="descripcion-texto">{detail.description}</p>
                    <a href={detail.portfolio}>
                        <button cursor="pointer" className="boton-portfolio">PORTFOLIO</button>
                    </a>
                    <hr className='hr-white'/>
                    <h2 className='titulo-linea'>Skills</h2>
                    <hr className="hr-perfil-violeta"></hr>
                    <div className="keyword-container">
                        {detail.technologies ? detail.technologies.map((e) => {
                            return <h3 className="keyword">{e.technology}</h3>
                        }) : "Sin keywords"}
                    </div>
                </div>
                
            </div>
            <div className="trabajos-perfil">
                <div>
                    <h1 className='titulo-linea'>MIS TRABAJOS</h1>
                    <hr className="hr-perfil-verde"></hr>
                </div>
                <div>
                    <CardTrabajosPrivado id={fullId}/>
                </div>
            <p className="descripcion-texto">{detail.description}</p>
            <a href={detail.portfolio}>
              <button cursor="pointer" className="boton-perfil">
                Portfolio
              </button>
            </a>
            <h2>Skills</h2>
            <hr className="hr-perfil-violeta"></hr>
            <div className="keyword-container">
              {detail.technologies
                ? detail.technologies.map((e) => {
                    return <h3 className="keyword">{e.technology}</h3>;
                  })
                : "Sin keywords"}
            </div>
          </div>
        </div>
        <div className="trabajos-perfil">
          <div>
            <h1>MIS TRABAJOS</h1>
            <hr className="hr-perfil-verde"></hr>
          </div>
          <div>
            <CardTrabajosPrivado id={fullId} />
          </div>
        </div>
      </div>
    )
}
