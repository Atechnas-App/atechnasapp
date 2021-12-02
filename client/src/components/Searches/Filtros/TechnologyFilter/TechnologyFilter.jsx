import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTechnologies, technologyFilter} from '../../../../actions/actions.js';


//Select con listado de posibles keywords para buscar
export default function TechFilter(){
    const dispatch = useDispatch();
    const tech = useSelector((state)=> state.rootReducer.technologies)
    
    useEffect(()=> {
        dispatch(getTechnologies())
    }, [dispatch]);
    
    const [keywords, setKeywords]= useState([]);
    console.log("keywords LOCAL", keywords);

    function deleteKey(e){
        e.preventDefault();
        dispatch(technologyFilter(keywords.filter(t => t !== e.target.value).join('-')))
        setKeywords(
            keywords.filter(t => t !== e.target.value)
        )
    }

    function handleChange(e){
        e.preventDefault();
        console.log("array tech ONCHANGE", keywords)
        dispatch(technologyFilter([...keywords, e.target.value].join('-')))
        setKeywords(
            [...keywords, e.target.value]
        )
    }


    return(
        <div>
            <div>
                <h3>Tecnologias</h3>
            </div>
            <div>
                <select  onChange={(e)=>{handleChange(e)}}>
                        
                        {
                            tech?.map(e => {
                                return (<option key={e.id} value={e.technology}> {e.technology} </option>)
                            })

                        }
                </select>    
            </div>
            <div>
                {keywords?.map((e, i)=>(
                    <button key={i} value={e} onClick={(e)=>{deleteKey(e)}}> {e} </button>
                ))} 
            </div>
        </div>
    )
}