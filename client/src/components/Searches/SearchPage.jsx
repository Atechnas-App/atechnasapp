import React from "react";
import Filtros from "./Filtros/Filtros";
import Cards from "./Cards/Cards";
import Nav from "../Nav/Nav";
import './SearchPage.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

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
                    
                    <Cards/>
                </div>
            </div>     
        </div>
    )
}