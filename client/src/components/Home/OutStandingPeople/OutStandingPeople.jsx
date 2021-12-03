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
    
    
    useEffect(() => {           
        dispatch(getUser()); 
    }, [dispatch]);
    
    let developer =  users?.filter((e) => e.categories[0].category.includes('Developer'))
    console.log('USER', users)
    console.log('DEV', developer)


    //POR CALIFICACIÓN PRIMERO ORDERNARLO DE MAYOR A MENOR 
    // DESPUES PONER LOS PRIMEROS TRES 
    // TIENE QUE ESTAR CONECTADO CON LA TABLA DE QUALIFICATIONS
    //TAMBIEN FALTA LO DE CATEGORIA, SEPARARLOS CON UN IF (E.CATEGORY === 'DEVELOPER')

    // const sortUsers = users?.sort((a,b)=>{
    //     a.qualification - b.qualification
    // })
    // console.log('SORT', sortUsers)


    return (
        <div>
            <div className='bestgeneral'></div>
                <h2>Developer</h2>
                <hr className='hrOut'/>
                <div className='best'>
                
                {   
                    users?.map((e, i) => {
                        
                    if(i < 3 && e.categories[0].category.includes('Developer')){
                       
                    return (
                    <CardPeople
                    profilePicture={e.profilePicture}
                    name={e.name}
                    lastName={e.lastName}
                    technology = {e.technologies}
                    qualification = {e.qualification}
                    id={e.id}
                    key={e.id}
                    categories={e.categories !== undefined? e.categories : 'no tiene categoria'}
                    
                    />
                    )}
                    })
                }
                </div>

            <div className='bestgeneral'></div>
                <h2>Diseño</h2>
                <hr/>
                <div className='best'>
                {
                    users?.map((e, i) => {
                    if(e.categories[0].category.includes('Design')){
                            
                    console.log("DESIGN", e)
                    return (
                    <CardPeople
                    profilePicture={e.profilePicture}
                    name={e.name}
                    lastName={e.lastName}
                    technology = {e.technologies}
                    qualification = {e.qualification}
                    id={e.id}
                    key={e.id}
                    categories={e.categories !== undefined? e.categories : 'no tiene categoria'}
                    />
                    )}
                    })
                }
                </div>

            <div className='bestgeneral'></div>
                <h2>Marketing</h2>
                <hr/>
                <div className='best'>
                {
                    users?.map((e, i) => {
                    if(i < 3 && e.categories[0].category.includes('Marketing')){
                       
                    return (
                    <CardPeople
                    profilePicture={e.profilePicture}
                    name={e.name}
                    lastName={e.lastName}
                    technology = {e.technologies}
                    qualification = {e.qualification}
                    id={e.id}
                    key={e.id}
                    categories={e.categories !== undefined? e.categories : 'no tiene categoria'}
                    />
                    )}
                    })
                }
                </div>
        </div>
    )
}
