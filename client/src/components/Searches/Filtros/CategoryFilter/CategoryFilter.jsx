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
    console.log('category', category)
    //poner un estado local donde se guarden las categorias en un array y mandarselo al back asi 
    //para que se concatenen y hay que filtrarlo para sacar los que no se checkean

    function handleCheck(e){
        e.preventDefault();
        if (e.target.checked) {
           
            setCategory(
                [...category, e.target.value] 
                
                )
               
        }else {
           
            setCategory(  
                category?.filter(c => c !== e.target.value)
                )
        };
        
        console.log("array cat",category);
        dispatch(categoryFilter(category.join('-')))
        }
    
      
    return (
        <div>
            <div>
                <h3>Categoria</h3>
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