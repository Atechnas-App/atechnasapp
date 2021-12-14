import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJob, getAllJobs } from '../../actions/actions';

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
        <div>
            <div>
            <h1>Publicaciones</h1>
            </div>
            {
                allJobs && allJobs.map(job => {
                    return (
                        <div>
                            {job.image.map(img => {
                                return <img src={img} alt="img not found"/>
                            })}
                            <h3>{job.title}</h3>
                            <h3>{job.description}</h3>
                            <button type="button" onClick={e => onDelete(e,job.id)}>Eliminar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}