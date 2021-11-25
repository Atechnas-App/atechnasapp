import React from 'react';
import freelancer from '../../../assets/img/freelancerHome.jpg';
import './Presentation.css'
export const Presentation = () => {
    return (
        <div className='containerPresentation'>
           <div className='margincontainer'>
                <h4 className='h4Presentation'>PORQUE ELEGIR ATECHNAS</h4>
                <h3 className='h3PResentation'>Tu trabajo más seguro</h3>
                <hr className='hrPresentation'/>

                <div className='divP'>
                    <h4>Publicá</h4>
                    <p> Publica todos tus conocimientos para que te encuentren. Generá mas clientes mostrando tus trabajos realizados.
                    </p>
                </div>
                
                <div className='divP'>
                    <h4>Obtené calificaciones</h4>
                    <p> Conseguí calificaciones altas para entrar en el ranking de recomendados y obtené mas propuestas de trabajos
                    </p>
                </div>

                <div className='divP'>
                    <h4>Grupos de trabajo</h4>
                    <p> Armá tu grupo de trabajo para nuevos proyectos y contraten al grupo entero.
                    </p>
                </div>
           </div>

           <div className='imgPresentation'>
               <img src={freelancer} alt='not found' className='imgP'></img>
           </div>
        </div>
    )
}
