import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteReview, getAllReviews } from '../../actions/actions';

export default function Comentarios(){

    const dispatch = useDispatch()
    const comentarios = useSelector((state)=> state.rootReducer.allReviews)
    
    useEffect(() => {
        dispatch(getAllReviews())
    },[dispatch])
    
    function onDelete(e,id){
        e.preventDefault()
        dispatch(deleteReview(id))
        alert("¡Comentario eliminado!")
    }

    return(
        <div>
            <h1>Comentarios</h1>
            <div>
                {
                    comentarios && comentarios.map(c => {
                        return (
                            <div>
                            <h2>{c.title}</h2>
                            <h2>{c.coments}</h2>
                            <h2>{c.qualification}</h2>
                            <button onClick={e => onDelete(e, c.id)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}