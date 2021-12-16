import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJob, getAllJobs } from '../../actions/actions';
import "./Publications.css"
import Carousel from 'nuka-carousel';


export default function Publications(){

    const dispatch = useDispatch()
    const allJobs = useSelector((state)=> state.rootReducer.allJobs)

    useEffect(() => {
        dispatch(getAllJobs())
    },[dispatch])

    function onDelete(e,id){
        e.preventDefault()
        dispatch(deleteJob(id))
        alert(`¡Publicacion eliminada!`)
    }

    return (
        <div className='publicaciones-admin-container'>
            <h1>Publicaciones</h1>
            <hr className='hr-perfil-violeta'></hr>
            <div className='publicaiones-admin'>
            {
                allJobs && allJobs.map(job => {
                    return (
                        <div className='card-publicacion-admin'>
                            <Carousel>
                                {job.image.map(img => {
                                    return <img src={img} alt="img not found"/>
                                })}
                            </Carousel>
                            <h2>{job.title}</h2>
                            <h4>{job.description}</h4>
                            <button className='boton-perfil-admin' type="button" onClick={e => onDelete(e,job.id)}>Eliminar</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}