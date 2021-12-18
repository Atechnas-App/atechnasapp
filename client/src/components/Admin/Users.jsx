import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* import { useHistory } from 'react-router-dom'; */
import { getUser, editProfile} from '../../actions/actions';
import EstadoUsario from './Cards/EstadoUsuario';
import "./Users.css"


export default function Users(){
    const dispatch = useDispatch()
   /*  const history = useHistory() */
    const users = useSelector((state)=> state.rootReducer.users)
    const [stateUsers, setStateUsers] = useState({
        status: "",
    })

    useEffect(() => {
        dispatch(getUser())
    },[dispatch])
    
   /*  console.log(users, "Usuarios") */

function onHandleSelect(e){
    e.preventDefault()
    setStateUsers({
        ...stateUsers,
        status: e.target.value
    })
}

function onSubmit(e, id){
    e.preventDefault()
    dispatch(editProfile(id, stateUsers))
}

    return(
        <div className='estado-usuario-container'>
            <h1>Estado de usuarios</h1>
            <hr className='hr-perfil-violeta'></hr>
            <div className='estado-usuario-admin'>
            {users?.map((u)=>{
                return(
                    <div>
                        <EstadoUsario
                        profilePicture={u.profilePicture}
                        name={u.name}
                        lastName={u.lastName}
                        />
                        <form onSubmit={(e)=>onSubmit(e,u.id)}>
                        <div className='select-estado-admin'>
                                <label>Estado: </label>
                                <select name="status" onChange={(e)=>onHandleSelect(e)}>
                                    <option value="Select" selected>Estado</option>
                                    <option value="ACTIVO">Activo</option>
                                    <option value="BANEADO">Baneado</option>
                                    <option value="EN REVISION">En revision</option>
                                </select>
                        </div>
                        <div>
                        <button className='button-usuario-admin' type='submit'>Guardar</button>
                        </div>
                    </form>
                    </div>
                )
            })}
            </div>
        </div>
    )
}