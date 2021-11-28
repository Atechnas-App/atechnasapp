import React from "react";
import Filtros from "./Filtros/Filtros";
import Nav from "../Nav/Nav";
import './SearchPage.css';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import CardPeople from '../Cards/CardPeople'


export default function SearchPage(){
    const searching = useSelector((state)=> state.search)

    
    return(
        <div className='container-searchpage'>
            <div className='components-searchpage'>
                <div className="nav-container">
                    <Nav/>
                </div>
                <div className="container-all">
                    <Filtros/>
                    
                <div>
                    {searching?.map((e) => {
                    return <CardPeople
                    profilePicture={e.profilePicture}
                    name={e.name}
                    lastName={e.lastName}
                    technology = {e.technology}
                    qualification = {e.qualification}
                    id={e.id}
                    key={e.id}
                    />
                    })}
                </div>
                </div>
            </div>     
        </div>
    )
}