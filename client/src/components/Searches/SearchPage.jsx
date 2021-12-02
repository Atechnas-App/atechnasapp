import React from "react";
import Filtros from "./Filtros/Filtros";
import Nav from "../Nav/Nav";
import './SearchPage.css';
import {useEffect} from 'react';
import CardPeople from '../Cards/CardPeople'
import {useDispatch, useSelector} from 'react-redux';
import {Search} from "../../actions/actions"

export default function SearchPage(){

    const searching = useSelector((state)=> state.rootReducer.search);
    


   
    
  
    
    return(
        <div className='container-searchpage'>
            <div className='components-searchpage'>
                <div className="nav-container">
                    <Nav/>
                </div>
                <div className="container-all">
                    <Filtros/>
                    
                <div>
                    {   searching[0]?.users?

                        searching?.map((e) => {
                        e.users?.map((u)=> {

                            return (<CardPeople
                            profilePicture={u.profilePicture}
                            name={u.name}
                            lastName={u.lastName}
                            technology = {u.technology}
                            qualification = {u.qualification}
                            id={u.id}
                            key={u.id}
                            categories={e.categories}
                            />)
                        }) 
                        
                        })
                        : searching?.map((e) => {
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