import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser} from '../../actions/actions';

export default function Comentarios(){
    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector((state)=> state.rootReducer.users)
    const [comentarios, setComentarios] = useState({
        
    })

    useEffect(() => {
        dispatch(getUser())
    },[dispatch])



    return(
        <div>
            <div>
                <h1>Empresa</h1>
                <p>Comentario</p> 
            </div>
            <button>Eliminar</button>
        </div>
    )
}