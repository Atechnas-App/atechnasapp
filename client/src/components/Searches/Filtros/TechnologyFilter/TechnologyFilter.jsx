import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTechnologies, Filter} from '../../../../actions/actions.js';
/* import './TechnologyFilter.css' */

//Select con listado de posibles keywords para buscar
export default function TechFilter(){
    const dispatch = useDispatch();
    const tech = useSelector((state)=> state.rootReducer.technologies)
    
    useEffect(()=> {
        dispatch(getTechnologies())
    }, [dispatch]);
    
    const [keywords, setKeywords]= useState([]);
   

    function deleteKey(e){
        e.preventDefault();
        dispatch(Filter(keywords.filter(t => t !== e.target.value).join('-')))
        setKeywords(
            keywords.filter(t => t !== e.target.value)
        )
    }

    function handleChange(e){
        e.preventDefault();
       
        dispatch(Filter([...keywords, e.target.value].join('-')))
        setKeywords(
            [...keywords, e.target.value]
        )
    }


    return(
        <div>
            <div>
                <h3 className='h3-all'>Tecnologias</h3>
            </div>
            <div>
                <select  onChange={(e)=>{handleChange(e)}} className='select-tech'>
                        
                        {
                            tech?.map(e => {
                                return (<option className='option-tech' key={e.id} value={e.technology}> {e.technology} </option>)
                            })

                        }
                </select>    
            </div>
            <div>
                {keywords?.map((e, i)=>(
                    <button className='boton-tech' key={i} value={e} onClick={(e)=>{deleteKey(e)}}> {e} </button>
                ))} 
            </div>
        </div>
    )
}