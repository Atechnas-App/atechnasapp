import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTestimonials } from '../../../actions/actions'
/* import Persona1 from '../../../assets/img/Persona1.png' */
import Persona2 from '../../../assets/img/Persona2.png'
import Persona3 from '../../../assets/img/Persona3.png'
import './Testimonial.modules.css'

export default function Testimonial(){
    const dispatch = useDispatch();
    const testimonials = useSelector((state)=> state.rootReducer.testimonials)
    useEffect(() => {
        dispatch(getTestimonials())
    },[dispatch])

    return(
        <div className='testimonial-container'>
            <div className='testimonial-head'>
                <h3>TESTIMONIOS</h3>
                <h1>Nuestros usuarios dijeron:</h1>
            </div>
            
            <div className='testimonial-container-people'>
                {testimonials && testimonials.map(e =>{
                    return (<div className='testimonial-people'>
                    <img className='testimonial-people-img' src={e.image} alt='img not found'/>
                    <h3>{e.name}</h3>
                    <h3>{e.company}</h3>
                    <p>{e.details}</p> </div>)})}
               
                <div className='testimonial-people'>
                    <img className='testimonial-people-img' src={Persona2} alt='img not found'/>
                    <h3>Robert Gonzales</h3>
                    <h3>Full Stack Dev en OurGlasses</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam officiis natus nihil voluptatibus eaque itaque perferendis nostrum modi fuga magnam, inventore optio dolor reprehenderit reiciendis recusandae deserunt corporis assumenda!</p>
                </div>
                <div className='testimonial-people'>
                    <img className='testimonial-people-img' src={Persona3} alt='img not found'/>
                    <h3>Charles Rodriguez</h3>
                    <h3>Lider UX/UI en Google</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam officiis natus nihil voluptatibus eaque itaque perferendis nostrum modi fuga magnam, inventore optio dolor reprehenderit reiciendis recusandae deserunt corporis assumenda!</p>
                </div>
            </div>
        </div>
    )
}