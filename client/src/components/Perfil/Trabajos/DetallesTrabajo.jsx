import "./DetallesTrabajos.css"
import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetailJob } from "../../../actions/actions";
import Nav from "../../Nav/Nav";
import axios from "axios";

export default function DetallesTrabajo(props){
    const [link, setLink] = useState('')
    const dispatch = useDispatch();
    const job = useSelector(state=>state.rootReducer.detailJob)
    const id = props.match.params.id
    
    useEffect(()=>{
        dispatch(getDetailJob(id))
    },[dispatch,id])
    useEffect(() => {
        axios.post(`http://localhost:3001/api/create_preference?id=${job.createdBy}`, { quantity: 1, price: job.price, description: job.title })
            .then(res => {
                setLink(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }, [job.createdBy ,job.price, job.title])
    console.log(job, "detalle del trabajo")

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
                <p className="texto-descripcion-trabajo">{job?.description}</p>
            </div>
            <div className="precio-contenedor">
                <div className="texto-precio">Precio</div>
                <div className="precio-trabajo">${job?.price}</div>
            </div>
            {/* <button>Comprar</button> */}
                                <a
                                href={link}
                                className="boton-perfil"
                            >
                                Contratar
                            </a>
        </div>
    )
}