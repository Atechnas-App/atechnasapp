import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getJobs } from "../../../actions/actions"
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
        
        <div className="trabajo-container">
            <div className="the-card">
                <div className="front-card">
                    <h1>Titulo</h1>
                    <h2>Precio</h2>
                </div>

                <div className="back-card">
                    <button>Mas detalles</button>
                    <button>Contratar</button>
                </div>
            </div>     
        </div>

        )
}
