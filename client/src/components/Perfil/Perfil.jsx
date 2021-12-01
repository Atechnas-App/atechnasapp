import "./Perfil.css"
import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router";
import {useEffect} from 'react';

import Persona1 from "../../assets/img/Persona1.png"

export default function Perfil(params){
const dispatch = useDispatch()
const detail = useSelector((state) => state.rootReducer.details)
const userDetail = detail[0]
let {id} = useParams()

useEffect(() => {
    dispatch(getDetails(id))
}, [dispatch]);

    return(
        <div className="perfil-container">
            <div className="datos-perfil">
                <div className="foto-perfil">
                    <div>
                        <img src={Persona1}></img>
                        <div>NOMBRE APELLIDO</div>
                    </div>
                    <div>
                        <form>
                            <button>Mensaje</button>
                            <button>Contratar</button>
                        </form>
                    </div>
                </div>
                <div className="descripcion-perfil">
                    <h1>NOMBRE APELLIDO</h1>
                    <h4></h4>
                    <p></p>
                    <a></a>
                    <div>
                        <h4></h4>
                        <h4></h4>
                        <h4></h4>
                        <h4></h4>

                    </div>
                </div>
            </div>
            <div className="trabajos-perfil">
                <div>
                    <h1>Mis trabajos</h1>
                </div>
                <div>
                    <h2>Aca van los trabajos</h2>
                </div>
            </div>
            <div className="comentarios-perfil">
            <div>
                    <h1>Cometarios</h1>
                </div>
                <div>
                    <h2>Aca van los comentarios</h2>
                </div>
            </div>
        </div>
    )
}