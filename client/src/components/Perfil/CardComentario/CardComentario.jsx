import "./CardComentario.css"
import { getReview } from '../../../actions/actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CardComentario(id){
    /* console.log("review 12 ",id) */

    const dispatch = useDispatch();
    const userReviews = useSelector((state)=> state.rootReducer.reviews)
    useEffect(() => {
        dispatch(getReview(id.id))
    },[dispatch, id.id])

    return(
        <div className="comentario-container">
            
            <div>
                {userReviews && userReviews?.map(e =>{
                    return (
                    <div className='div-container-comentario'>
                    <p className="comentario-usuario">{e.title}</p>
                    <p className="comentario-calificacion">{"★".repeat(e.qualification)} {e.qualification}</p>
                    <p className="comentario-text">{e.coments}</p> 
                    </div>)})}
            </div>
        </div>
    )
}