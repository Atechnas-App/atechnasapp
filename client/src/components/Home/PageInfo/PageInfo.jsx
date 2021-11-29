import React from 'react';
import "./PageInfo.modules.css";
import freelancer from '../../../assets/img/freelancer.png';
import recruiter from '../../../assets/img/recruiter.png';
import usuarios from '../../../assets/img/usuarios.png';

export const PageInfo = () => {
    return (
        <div className='container-pageinfo'>

            <div className='div-pageinfo'>
                <div className='img-pageinfo'>
                    <img src={freelancer} alt='not found' width='100px' height='100px' />
                </div>
                <div className='info-pageinfo'>
                    <h2>+50000</h2>
                    <h4>Freelancers</h4>
                    <h4>de Latino America</h4>
                </div>
            </div>

            <div className='div-pageinfo border'>
                <div className='img-pageinfo'>
                    <img src={recruiter} alt='not found' width='100px' height='100px'/>
                </div>
                <div className='info-pageinfo'>
                    <h2>+20000</h2>
                    <h4>Reclutadores</h4>
                    <h4>de todo el mundo</h4>
                </div>
            </div>

            <div className='div-pageinfo'>
                <div className='img-pageinfo'>
                    <img src={usuarios} alt='not found' width='100px' height='100px'/>
                </div>
                <div className='info-pageinfo'>
                    <h2>+50000</h2>
                    <h4>Usuarios Activos</h4>
                </div>
            </div>
        </div>
    )
}
