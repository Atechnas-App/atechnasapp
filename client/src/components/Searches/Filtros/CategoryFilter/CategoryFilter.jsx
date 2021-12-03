import React from 'react';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categoryFilter, getCategories } from "../../../../actions/actions"
import "./CategoryFilter.css"

export default function CatFilter(){
    const dispatch = useDispatch()
    const categories = useSelector((state)=> state.rootReducer.categories);
    
    useEffect(() => {
        dispatch(getCategories())
        
    },[dispatch])
    
    const [category, setCategory] = useState([]);
    console.log('cat Estado Local', category)
    //poner un estado local donde se guarden las categorias en un array y mandarselo al back asi 
    //para que se concatenen y hay que filtrarlo para sacar los que no se checkean

    function handleCheck(e){
        e.preventDefault();
        if (e.target.checked) {
            console.log("CAT 1if",category);
            dispatch(categoryFilter([...category, e.target.value].join('-')))
            setCategory(
                
                [...category, e.target.value] 
                
                )
               
        }else {
            console.log("CAT else",category);
            dispatch(categoryFilter(category?.filter(c => c !== e.target.value).join('-')))
           
            setCategory(  
                category?.filter(c => c !== e.target.value)
                )
        };
        
        }
    
      
    return (
        <div>
            <div>
                <h3 className='h3-categories h3-all'>Categoria</h3>
            </div>
            
              
            <div className="container-checkbox">

              {
                  categories && categories.map( c => {
                  return <div>
                    <input key={c.id} type='checkbox' name='category' value={c.category}  onChange={(e) => {handleCheck(e)}} className='checkbox'/>
                    <label>{c.category}</label>
                  </div>
                  
                })
              }     
            </div>
              
            
        </div>
    )
}