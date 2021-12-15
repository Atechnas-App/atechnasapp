import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteTestimonial, getTestimonials, postTestimonial } from '../../actions/actions';
import "./Testimonials.css"


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
        <div className='testimonio-container-admin'>
            <div className='crear-testimonio-container'>
            <h1>Crear Testimonio</h1>
            <hr className='hr-perfil-violeta'></hr>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='input-label-testimonio'>
                    <label className="label-testimonio" to="name">Nombre: </label>
                    <hr className="hr-perfil-verde"></hr>
                    <input className="input-testimonio" type="text" name="name" onChange={(e) => onHandleChange(e)}value={newTestimonial.name}/>
                </div>
                <div className='input-label-testimonio'>
                    <label className="label-testimonio" to="company">Compania: </label>
                    <hr className="hr-perfil-verde"></hr>
                    <input className="input-testimonio" type="text" name="company" onChange={(e) => onHandleChange(e)}value={newTestimonial.company}/>
                </div>
                <div className='input-label-testimonio'>
                    <label className="label-testimonio" to="details">Detalles: </label>
                    <hr className="hr-perfil-verde"></hr>
                    <textarea className="input-testimonio" type="text" name="details" onChange={(e) => onHandleChange(e)}value={newTestimonial.details}/>
                </div>
                <div className='input-label-testimonio'>
                    <label className="label-testimonio" to="image">Foto de perfil: </label>
                    <hr className="hr-perfil-verde"></hr>
                    <input className="input-testimonio" type="text" name="image" onChange={(e) => onHandleChange(e)}value={newTestimonial.image}/>
                </div>
                <div>
                    <button className='button-testimonio-admin' type="submit">Guardar</button>
                </div>
            </form>
            </div>
            <div className='crear-testimonio-container'>
            <h1>Testimonios</h1>
            <hr className='hr-perfil-violeta'></hr>
            <div className='testimonio-creado-container'>
            {
                testimonials?.map(testimonial => {
                    return(
                    <div className='testimonio-creado'>
                        <div>
                            <h3>{testimonial.name}</h3>
                            <h3>{testimonial.company}</h3>
                            <p>{testimonial.details}</p>
                        </div>
                        <div>
                            <button className='boton-perfil-admin' type="button" onClick={e => onDelete(e,testimonial.id)}>Eliminar</button>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            </div>
            
        </div>
    )
}