import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getJobs } from "../../../actions/actions"
import {Link} from 'react-router-dom'
import "./CardTrabajo.css"
import axios from "axios"

export default function CardTrabajo(id){

    const [link, setLink] = useState('')
    const jobs = useSelector((state)=> state.rootReducer.jobs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getJobs(id))
    },[dispatch,id])
    console.log(jobs, "card trabajo")
    console.log(id, "Jobs")

    useEffect(() => {
        axios.post(`http://localhost:3001/api/create_preference?id=${id}`, { quantity: 10, price: 100, description: 'BACKEND DEVELOPER' })
            .then(res => {
                setLink(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }, [id])

    return (
        <div className='cards-trabajos'>
            
        {jobs.map((j)=>{
            return(
        <div class="container">
            <div class="card">
                <div class="front">
                    <div className="img-cardpost">
                    </div>
                    <div className='info-cardpost'>
                        <h1 className='titulo-card'>{j.title}</h1>
                        <p className='precio-card'>$ {j.price}</p>
                    </div>
                </div>
                <div class="back">
                    <Link to={'/trabajos/detalle/'+ j.id}>
                        <button className="boton-cardpost"> Más detalles </button>
                    </Link>
                    <a
                                href={link}
                                className="boton-cardpost"
                            >
                                Contratar
                            </a>
                </div>
            </div>
        </div>)})}
    
        
    </div>
    )
}
