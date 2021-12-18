import "./DetallesTrabajos.css"
import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetailJob } from "../../../actions/actions";
import Nav from "../../Nav/Nav";
import axios from "axios";

export default function DetallesTrabajo(props){
    const dispatch = useDispatch();
    const [text, setText] = useState({
        text: ""
    })
    const job = useSelector(state=>state.rootReducer.detailJob)
    const id = props.match.params.id
    const local = JSON.parse(localStorage.getItem("user"));
    /* console.log(local.id) */
    useEffect(()=>{
        dispatch(getDetailJob(id))
    },[dispatch,id])

    function onClickContactar(e){
        e.preventDefault()
        axios.put(`/api/addPublication/${local.id}/${id}`, text)
        .then( () => 
            alert("Se en envio la solicitud")
        )
        .catch( error =>
            console.log(error.message)
        )
    }

    function onHandleChange(e){
        e.preventDefault();
        setText(
            {text: e.target.value}
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
                        <textarea placeholder="Ingrese su consulta aquí..." name="text" value={text.text} onChange={e => onHandleChange(e)} />
                                            <button 
                                            type= "button"
                                            onClick={e => onClickContactar(e)}
                                            className="boton-perfil btn-details"
                                            >
                                            Contactar
                                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}