import React from 'react';
import './Paginado.css'

export default function Paginado({cardPage, allCards, paginado, actualPage}){
    const numPaginas = [];

    for(let i = 0; i <= Math.floor(allCards/cardPage); i++){   
        numPaginas.push(i+1);                                 
    }

    return(    
        <div className='paginado-nav'>
            <ul className='ul'>
                {numPaginas && numPaginas.map(num => (
                    <li key={num} className='li-Paginado'>
                    <a className={num === actualPage? 'actual' : 'paginado'} href={num} onClick={() => paginado(num)}><strong> {num} </strong></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}