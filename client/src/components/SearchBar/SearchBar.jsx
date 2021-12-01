import React from 'react';
import './SearchBar.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Search} from '../../actions/actions.js';
import {useHistory} from 'react-router-dom';


export default function SearchBar(){
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    // const searching = useSelector((state)=> state.rootReducer.search)
    const history = useHistory();
    


    function onSubmit(e){
        e.preventDefault();
        dispatch(Search(search))
        
        history.push('/results')
        
        
    }

    function handdleInput(e){
        e.preventDefault();
        setSearch(e.target.value)
    }

    return(

        <div>
            <form className='fromSearch' onSubmit={(e)=>{onSubmit(e)}}>
                <input type='text' placeholder='Buscar por nombre, categoria, tecnologias...' value={search} name='buscador' onChange={(e)=>{handdleInput(e)}} className='inputSearch'></input>   
            </form>
            
        </div>
    )
}