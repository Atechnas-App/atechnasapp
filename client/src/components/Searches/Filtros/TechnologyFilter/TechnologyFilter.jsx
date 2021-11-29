import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTechnologies} from '../../../../actions/actions';


//falta conectar el listado (la tabla del back) para que cuando busques te aparezcan las opciones
export default function TechFilter(){
    const [keywords, setKeywords]= useState([])
    const dispatch = useDispatch();
    const tech = useSelector((state)=> state.rootReducer.technologies)

    useEffect(()=> {
        dispatch(getTechnologies())
    }, [dispatch]);


    function handleChange(e){
        e.preventDefault();
        setKeywords([...keywords, e.target.value])
    }

    function submitForm(e){
        e.preventDefault();
        
    }

    return(
        <div>
            <div>
                <h3>Tecnologias</h3>
            </div>
            <div>
                <form onSubmit={(e)=>{submitForm(e)}}>
                    <input type="text" name='keywords' value={keywords} onChange={(e)=>{handleChange(e)}}/>
                </form>
            </div>
        </div>
    )
}