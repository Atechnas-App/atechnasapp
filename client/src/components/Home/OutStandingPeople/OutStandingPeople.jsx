import React from 'react';
import freelancer from '../../../assets/img/freelancerHome.jpg';
import './OutStandingPeople.css'
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../../actions/actions';
import {useEffect} from 'react';
import CardPeople from '../../Cards/CardPeople'

export const OutStandingPeople = () => {
    const dispatch = useDispatch();
    const users = useSelector((state)=> state.rootReducer.users)
    console.log("COMPONENTE", users)
    
    useEffect(() => {           
        dispatch(getUser()); 
    }, [dispatch]);
    

    return (
        <div>
            <div className='bestgeneral'></div>
                <h2>Developer</h2>
                <hr className='hrOut'/>
                <div className='best'>
                
                    {users?.map((e) => {
                    return (
                    <CardPeople
                    profilePicture={e.profilePicture}
                    name={e.name}
                    lastName={e.lastName}
                    technology = {e.technology}
                    qualification = {e.qualification}
                    id={e.id}
                    key={e.id}
                    />
                    )
                    })}
                

                   
                </div>

            <div className='bestgeneral'></div>
                <h2>Diseño</h2>
                <hr/>
                <div className='best'>
                    <div>
                        <img src={freelancer} alt='persona' width='150px' height='150px' className='imgOut'/>
                        <h3> Nombre Apellido </h3>
                        <p>Keywords Keywords Keywords Keywords <br/>
                        Keywords Keywords Keywords Keywords <br/>
                        </p>

                        <p>Calificación</p>
                        <button>MÁS</button>
                    </div>
                    <div>
                        <img src={freelancer} alt='persona' width='150px' height='150px' className='imgOut'/>
                        <h3> Nombre Apellido </h3>
                        <p>Keywords Keywords Keywords Keywords <br/>
                        Keywords Keywords Keywords Keywords <br/>
                        </p>

                        <p>Calificación</p>
                        <button>MÁS</button>
                    </div>
                    <div>
                        <img src={freelancer} alt='persona' width='150px' height='150px' className='imgOut'/>
                        <h3> Nombre Apellido </h3>
                        <p>Keywords Keywords Keywords Keywords <br/>
                        Keywords Keywords Keywords Keywords <br/>
                        </p>

                        <p>Calificación</p>
                        <button>MÁS</button>
                    </div>
                </div>

            <div className='bestgeneral'></div>
                <h2>Marketing</h2>
                <hr/>
                <div className='best'>
                    <div>
                        <img src={freelancer} alt='persona' width='150px' height='150px' className='imgOut'/>
                        <h3> Nombre Apellido </h3>
                        <p>Keywords Keywords Keywords Keywords <br/>
                        Keywords Keywords Keywords Keywords <br/>
                        </p>

                        <p>Calificación</p>
                        <button>MÁS</button>
                    </div>
                    <div>
                        <img src={freelancer} alt='persona' width='150px' height='150px' className='imgOut'/>
                        <h3> Nombre Apellido </h3>
                        <p>Keywords Keywords Keywords Keywords <br/>
                        Keywords Keywords Keywords Keywords <br/>
                        </p>

                        <p>Calificación</p>
                        <button>MÁS</button>
                    </div>
                    <div>
                        <img src={freelancer} alt='persona' width='150px' height='150px' className='imgOut'/>
                        <h3> Nombre Apellido </h3>
                        <p>Keywords Keywords Keywords Keywords <br/>
                        Keywords Keywords Keywords Keywords <br/>
                        </p>

                        <p>Calificación</p>
                        <button>MÁS</button>
                    </div>
                </div>
        </div>
    )
}
