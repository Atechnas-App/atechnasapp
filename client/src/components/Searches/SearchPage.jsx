import React from "react";
import Filtros from "./Filtros/Filtros";
import Nav from "../Nav/Nav";
import './SearchPage.css';
import { useSelector} from 'react-redux';
import Renderizado from './Renderizado/Renderizado'


export default function SearchPage(){

    const searching = useSelector((state)=> state.rootReducer.search);
    
   
    
    return(
        <div className='container-searchpage'>
            <div className='components-searchpage'>
                <div className="nav-container">
                    <Nav/>
                </div>
                <div className="container-all">
                    <div className='container-filtro'>
                        <Filtros  className='fixed-filters'/>
                    </div>
                    
                <Renderizado/>
                

                </div>
                
            </div>     
        </div>
    )
}