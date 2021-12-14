import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser} from '../../actions/actions';


export default function Users(){
    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector((state)=> state.rootReducer.users)
    const [stateUsers, setStateUsers] = useState({
        name: "",
        image: "",
        company: "",
        details: "",
    })

    useEffect(() => {
        dispatch(getUser())
    },[dispatch])
    
    console.log(users, "Usuarios")

    return(
        <div>
            <h1>Usuarios</h1>
        </div>
    )
}