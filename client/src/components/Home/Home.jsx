import React from "react";
import Carrucel from "./Carrucel/Carrucel";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import MobileApp from "./MobileApp/MobileApp";
import {OutStandingPeople} from "./OutStandingPeople/OutStandingPeople";
import {PageInfo} from "./PageInfo/PageInfo";
import {Presentation} from "./Presentation/Presentation";
import Testimonial from "./Testimonial/Testimonial";
import './Home.css';
import {useSelector} from 'react-redux';

export default function Home(){
    const search = useSelector((state)=> state.rootReducer.search)

    return(
        <div className='containerHome'> 
            <div className='ajustarHome'> 
                         
                <Nav/>
                <Carrucel/>
                <PageInfo/>
                <Presentation/>
                <Testimonial/>
                <OutStandingPeople/>
                <MobileApp/>
                <Footer/>
            </div> 
        </div>
    )
}
