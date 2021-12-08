import React from 'react';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories, Search, stateSearchBar } from "../../../../actions/actions"
import "./CategoryFilter.css"

export default function CatFilter(){
    const dispatch = useDispatch()
    const categories = useSelector((state)=> state.rootReducer.categories);
    
    useEffect(() => {
        dispatch(getCategories())
        
    },[dispatch])
    
    const [category, setCategory] = useState([]);
    
    //poner un estado local donde se guarden las categorias en un array y mandarselo al back asi 
    //para que se concatenen y hay que filtrarlo para sacar los que no se checkean

    function handleCheck(e){
        e.preventDefault();
        if (e.target.checked) {
           
            dispatch(Search([...category, e.target.value].join('-')))
            
            setCategory(
                
                [...category, e.target.value] 
                
                )
            dispatch(stateSearchBar([...category, e.target.value].join('-') ))
                
            }else {
                
                dispatch(Search(category?.filter(c => c !== e.target.value).join('-')))
                
                setCategory(  
                    category?.filter(c => c !== e.target.value)
                    )
                    dispatch(stateSearchBar(category))
        };
        
        }
    
      
    return (
        <div>
            <div>
                <h3 className='h3-categories h3-all'>Categoria</h3>
            </div>
            
              
            <div className="container-checkbox">

              {
                  categories && categories.map( (c,i) => {
                  return <div key={i} >
                    <input key={c.id} type='checkbox' name='category' value={c.category}  onChange={(e) => {handleCheck(e)}} className='checkbox'/>
                    <label>{c.category}</label>
                  </div>
                  
                })
              }     
            </div>
              
            
        </div>
    )
}