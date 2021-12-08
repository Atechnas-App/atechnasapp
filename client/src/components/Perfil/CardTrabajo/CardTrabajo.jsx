import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getJobs } from "../../../actions/actions"
import {Link} from 'react-router-dom'
import "./CardTrabajo.css"

export default function CardTrabajo(id){

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getJobs(id))
    // },[dispatch,id])
    // const jobs = useSelector((state)=> state.rootReducer.jobs)
    // console.log(jobs)
    // return(<>
    //     {jobs && jobs.map((j) =>{
    //         var qual = ""
    //         for(var i = 0; i < j.qualification; i++){
    //             qual += "•"
    //         }
    //     return (<div className="trabajo-container">
    //         <h2 className="trabajo-titulo">Titulo</h2>
    //         <h3 className="trabajo-precio">Precio</h3>
                     
    //     </div>)})}
    // </>)

    return (

        <div class="container">
            <div class="card">
                <div class="front">
                    <div className="img-cardpost">
                    </div>
                    <h1 className='titulo-card'>Titulo</h1>
                    <p className='precio-card'>Precio</p>
                </div>
                <div class="back">
                    <Link to={'/trabajos/detalle/'}>{/* + id */}
                        <button className="boton-cardpost"> Más detalle </button>
                    </Link>
                    <Link to={''}> {/* Link a Mercado Pago */}
                    <button className="boton-cardpost"> Contratar </button>
                    </Link>
                </div>
            </div>
        </div>
    

        )
}
