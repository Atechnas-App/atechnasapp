import React from 'react';
import './SearchBar.css';
import {useState} from 'react';
// import {useDispatch} from 'react-redux';

export default function SearchBar(){
    const [search, setSearch] = useState('');
    



    function handdleInput(e){
        e.preventDefault();
        setSearch(e.target.value)
    }

    return(

        <form className='fromSearch'>

            <input type='text' placeholder='Buscar...' value={search} name='buscador' onChange={(e)=>{handdleInput(e)}} className='inputSearch'></input>
            
        </form>

    )
}