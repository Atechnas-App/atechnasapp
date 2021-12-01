import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categoryFilter, getCategories } from "../../../../actions/actions"
import "./CategoryFilter.css"

export default function CatFilter(){
    const dispatch = useDispatch()
    const categories = useSelector((state)=> state.rootReducer.categories);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])
    
    //poner un estado local donde se guarden las categorias en un array y mandarselo al back asi 
    //para que se concatenen y hay que filtrarlo para sacar los que no se checkean

    function handleCheck(e){
        e.preventDefault()
        dispatch(categoryFilter(category))
        if (e.target.checked) {
            setCategory(
                [...category, e.target.value] 
                
                )
                console.log('FILTRADO POR CAT', category)
          }else {
            console.log('filtra las categorias', category)
            setCategory(  
                category?.filter(c => c !== e.target.value)
            )
          }
          
        }
    
      
    return (
        <div>
            <div>
                <h3>Categoria</h3>
            </div>
            <div>
                <form>
                    <div className="container-checkbox">

              {
                  categories && categories.map(c => {
                  return <div>
                    <input key={c.id} type='checkbox' name='category' value={c.category} onChange={(e) => handleCheck(e)} className='checkbox'/>
                    <label>{c.category}</label>
                  </div>
                  
                })
              }     
                    </div>
                </form>
            </div>
        </div>
    )
}