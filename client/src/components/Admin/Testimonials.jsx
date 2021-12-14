import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteTestimonial, getTestimonials, postTestimonial } from '../../actions/actions';


export default function Testimonials(){
    
    const dispatch = useDispatch()
    const history = useHistory()
    const testimonials = useSelector((state)=> state.rootReducer.testimonials)
    const [newTestimonial, setNewTestimonial] = useState({
        name: "",
        image: "",
        company: "",
        details: "",
    })


    useEffect(() => {
        dispatch(getTestimonials())
    },[dispatch])
    
    function onSubmit(e){
        dispatch(postTestimonial(newTestimonial))
        setNewTestimonial({
            name: "",
            image: "",
            company: "",
            details: "",
        })
        alert("¡Testimonio creado!")
    }
    console.log(newTestimonial,"testimonial")
    function onHandleChange(e){
        e.preventDefault()
        setNewTestimonial({
            ...newTestimonial,
            [e.target.name]: e.target.value,
        })
    }

    function onDelete(e,id){
        dispatch(deleteTestimonial(id))
        alert("¡Testimonio eliminado!")
        history.push("/Admin/testimonios")
    }
    console.log(testimonials[0]?.id)
    return (
        <div>
            <h1>Testimonios</h1>
            {
                testimonials?.map(testimonial => {
                    return(<div>
                        <div>
                            <h3>{testimonial.name}</h3>
                            <h3>{testimonial.company}</h3>
                            <p>{testimonial.details}</p>
                        </div>
                        <div>
                            <button type="button" onClick={e => onDelete(e,testimonial.id)}>X</button>
                        </div>
                    </div>
                    )
                })
            }
            <div>
            <h2>Crear Testimonio</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <label to="name">Nombre:</label>
                <input type="text" name="name" onChange={(e) => onHandleChange(e)}value={newTestimonial.name}/>
                <label to="company">Compania:</label>
                <input type="text" name="company" onChange={(e) => onHandleChange(e)}value={newTestimonial.company}/>
                <label to="details">Detalles:</label>
                <input type="text" name="details" onChange={(e) => onHandleChange(e)}value={newTestimonial.details}/>
                <label to="image">Foto de perfil:</label>
                <input type="text" name="image" onChange={(e) => onHandleChange(e)}value={newTestimonial.image}/>
                <button type="submit">Guardar</button>
            </form>
            </div>
            
        </div>
    )
}