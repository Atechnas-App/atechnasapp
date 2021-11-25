import React from 'react'
import Persona1 from '../../../assets/img/Persona1.png'
import Persona2 from '../../../assets/img/Persona2.png'
import Persona3 from '../../../assets/img/Persona3.png'
import './Testimonial.modules.css'

export default function Testimonial(){
    return(
        <div className='testimonial-container'>
            <div className='testimonial-head'>
                <h3>TESTIMONIALS</h3>
                <h1>Our Happy Customers</h1>
            </div>
            <div className='testimonial-container-people'>
                <div className='testimonial-people'>
                    <img className='testimonial-people-img' src={Persona1} alt='img not found'/>
                    <h3>Carla Lopez</h3>
                    <h3>Recruiter en Always Smiling</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam officiis natus nihil voluptatibus eaque itaque perferendis nostrum modi fuga magnam, inventore optio dolor reprehenderit reiciendis recusandae deserunt corporis assumenda!</p>
                </div>
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