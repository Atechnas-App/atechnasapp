import "./DetallesTrabajos.css"
import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailJob } from "../../../actions/actions";
import Nav from "../../Nav/Nav";
import axios from "axios";

export default function RespuestaTrabajo(props){
    const {idPublication, userid} = props.match.params
    const dispatch = useDispatch();
    const job = useSelector(state=>state.rootReducer.detailJob)
    const local = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
        dispatch(getDetailJob(idPublication))
    },[dispatch,idPublication])

    function onClickAceptar(e){
        e.preventDefault()
        axios.put(`/api/aceptPublication/${local.id}/${idPublication}`)
        .then( () => 
            alert("Se aceptó la solicitud")
        )
        .catch( error =>
            console.log(error.message)
        )
    }

    function onClickRechazar(e){
        e.preventDefault()
        axios.put(`/api/removePublication/${userid}/${idPublication}`)
        .then( () => 
            alert("Se rechazó la solicitud")
        )
        .catch( error =>
            console.log(error.message)
        )
    }

    return(
        <div className="detalle-trabajo-contenedor">
            <Nav/>
            <div className='padding-detail'>
                <div>
                    <div className='carrousel-details'>
                        <Carousel className="carousel-trabajo">

                            {job?.image?.map((img)=>{
                                return(
                                    <img src={img} alt="img not found"/> 
                                    )
                                })}
                        </Carousel>
                    </div>
                    <h1 className="titulo-trabajo">{job?.title}</h1>
                    
                    <div className="descripcion-texto">
                        <p className="texto-descripcion-trabajo">{job?.description}</p>
                    </div>
                    <div className='flex-btn-details'>
                        <div className="precio-contenedor">
                            <div className="precio-trabajo">${job?.price}</div>
                        </div>
                                            <button 
                                            type= "button"
                                            onClick={e => onClickAceptar(e)}
                                            className="boton-perfil btn-details"
                                            >
                                            Aceptar
                                        </button>
                                        <button 
                                            type= "button"
                                            onClick={e => onClickRechazar(e)}
                                            className="boton-perfil btn-details"
                                            >
                                            Rechazar
                                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}