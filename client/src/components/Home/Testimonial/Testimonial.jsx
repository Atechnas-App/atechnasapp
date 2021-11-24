import React from 'react'
import Persona1 from '../../../assets/img/Persona1.png'
import Persona2 from '../../../assets/img/Persona2.png'
import Persona3 from '../../../assets/img/Persona3.png'

export default function Testimonial(){
    return(
        <div>
            <div>
                <h3>TESTIMONIALS</h3>
                <h1>Our Happy Customers</h1>
            </div>
            <div>
                <div>
                    <img src={Persona1} alt='img not found'/>
                    <h3>NOMBRE</h3>
                    <h3>Puesto</h3>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam officiis natus nihil voluptatibus eaque itaque perferendis nostrum modi fuga magnam, inventore optio dolor reprehenderit reiciendis recusandae deserunt corporis assumenda!</h2>
                </div>
                <div>
                <img src={Persona2} alt='img not found'/>
                    <h3>NOMBRE</h3>
                    <h3>Puesto</h3>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam officiis natus nihil voluptatibus eaque itaque perferendis nostrum modi fuga magnam, inventore optio dolor reprehenderit reiciendis recusandae deserunt corporis assumenda!</h2>
                </div>
                <div>
                <img src={Persona3} alt='img not found'/>
                    <h3>NOMBRE</h3>
                    <h3>Puesto</h3>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam officiis natus nihil voluptatibus eaque itaque perferendis nostrum modi fuga magnam, inventore optio dolor reprehenderit reiciendis recusandae deserunt corporis assumenda!</h2>
                </div>
            </div>
        </div>
    )
}