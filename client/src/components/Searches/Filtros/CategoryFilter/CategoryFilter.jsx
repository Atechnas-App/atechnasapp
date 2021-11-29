import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categoryFilter, getCategories } from "../../../../actions/actions"
import "./CategoryFilter.css"

export default function CatFilter(){
    const dispatch = useDispatch()
    const categories = useSelector((state)=> state.rootReducer.categories)
    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])

    function handleCheck(e){
        e.preventDefault()
        dispatch(categoryFilter(e.target.value))
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