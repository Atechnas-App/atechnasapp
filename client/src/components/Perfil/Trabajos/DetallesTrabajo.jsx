import "./DetallesTrabajos.css"
import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailJob } from "../../../actions/actions";
import Nav from "../../Nav/Nav";

export default function DetallesTrabajo(props){

    const dispatch = useDispatch();
    const job = useSelector(state=>state.rootReducer.detailJob)
    const id = props.match.params.id
    
    useEffect(()=>{
        dispatch(getDetailJob(id))
    },[dispatch])

    

    return(
        <div className="detalle-trabajo-contenedor">
            <Nav/>
            <Carousel className="carousel-trabajo">
                {job?.image?.map((img)=>{
                    return(
                        <img src={img} alt="img not found"/> 
                        )
                    })}
            </Carousel>
            <h1 className="titulo-trabajo">{job?.title}</h1>
            <hr className="hr-perfil-violeta"></hr>
            <div className="descripcion-trabajo">
                <p className="texto-descripcion-trabajo">{job?.about}</p>
            </div>
            <div className="precio-contenedor">
                <div className="texto-precio">Precio</div>
                <div className="precio-trabajo">${job?.price}</div>
            </div>
            <button>Comprar</button>
        </div>
    )
}