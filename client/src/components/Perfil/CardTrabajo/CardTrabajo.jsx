import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getJobs } from "../../../actions/actions"
import "./CardTrabajo.css"

export default function CardTrabajo(id){


    return (
    <div>
        <div className="card">

        </div>

        <div className="front trabajo-container">
        <h2 className="trabajo-titulo">Titulo</h2>
        <h3 className="trabajo-empresa">Compañia</h3>           
        </div>

        <div className='back'>
            <button> Más detalle </button>
            <button> Contratar </button>
        </div>
    </div>

    
    )
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
    //     return (
        
    //         <div className="trabajo-container">
    //         <h2 className="trabajo-titulo">Titulo</h2>
    //         <h3 className="trabajo-empresa">Compañia</h3>
    //         <h3 className="trabajo-url">{j.url}</h3>
    //         <h3 className="trabajo-calificacion">CALIFICACIÓN.0</h3>            
    //     </div>
        
    //     )})}
    // </>)
}
