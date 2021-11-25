import React from 'react';
import './SearchBar.css';

export default function SearchBar(){
    return(

        <form className='fromSearch'>
            <input type='text' value='poner valor que se ingresa' name='buscador' className='inputSearch'></input>
            <button>Buscar</button>
        </form>

    )
}