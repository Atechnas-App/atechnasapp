import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getJobs } from "../../../actions/actions"
import "./CardTrabajo.css"

export default function CardTrabajo(id){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getJobs(id))
    },[dispatch,id])
    const jobs = useSelector((state)=> state.rootReducer.jobs)
    console.log(jobs)
    return(<>
        {jobs && jobs.map((j) =>{
            var qual = ""
            for(var i = 0; i < j.qualification; i++){
                qual += "•"
            }
        return (<div className="trabajo-container">
            <h2 className="trabajo-titulo">{j.title}</h2>
            <h3 className="trabajo-empresa">{j.company}</h3>
            <h3 className="trabajo-url">{j.url}</h3>
            <h3 className="trabajo-calificacion">{qual} {j.qualification}.0</h3>            
        </div>)})}
    </>)
}
