import React from "react";
import Filtros from "./Filtros/Filtros";
import Nav from "../Nav/Nav";
import './SearchPage.css';
import CardPeople from '../Cards/CardPeople'
import { useSelector} from 'react-redux';


export default function SearchPage(){

    const searching = useSelector((state)=> state.rootReducer.search);
    const filter = useSelector((state)=> state.rootReducer.filteredUsers);
    console.log('LOCAL SEARCH', searching)
    console.log('LOCAL FILTER', filter)


   
    
  
    
    return(
        <div className='container-searchpage'>
            <div className='components-searchpage'>
                <div className="nav-container">
                    <Nav/>
                </div>
                <div className="container-all">
                    <div className='container-filtro'>
                        <Filtros/>
                    </div>
                    
                    <div className='container-cards'>
                    {   

                            searching?.map((e) => {
                            return <CardPeople
                            profilePicture={e.profilePicture}
                            name={e.name}
                            lastName={e.lastName}
                            technology = {e.technology}
                            qualification = {e.qualification}
                            id={e.id}
                            key={e.id}
                            categories={e.categories}
                            />
                        })
                        
                        
                    }
                    </div>
                

                </div>
                
            </div>     
        </div>
    )
}