import "./Perfil.css"
import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router";
import {useEffect} from 'react';
import { getDetails } from "../../actions/actions";
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
        <div>
            <h1>
            APARECE LA CONCHA DE TU MADRE
            </h1>
        </div>
    )
}