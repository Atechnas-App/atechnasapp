import TechFilter from "./TechnologyFilter/TechnologyFilter"
import QualFilter from "./QualificationFilter/QualificationFilter"
import CatFilter from "./CategoryFilter/CategoryFilter"
import {useState} from 'react';


export default function Filtros(){
   
    return(
        <div className='fixed-filters'>
            
            <CatFilter />
            {/* <QualFilter/> */}
            <TechFilter/>
            
        </div>
    )
}