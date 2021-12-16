import React, { useEffect } from "react";
/* import Carrucel from "./Carrucel/Carrucel"; */
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import MobileApp from "./MobileApp/MobileApp";
import {OutStandingPeople} from "./OutStandingPeople/OutStandingPeople";
import {PageInfo} from "./PageInfo/PageInfo";
import {Presentation} from "./Presentation/Presentation";
import Testimonial from "./Testimonial/Testimonial";
import './Home.css';
/* import {useSelector} from 'react-redux'; */
/* import ScrollUpButton from "react-scroll-up-button"; */
import Carousel from 'nuka-carousel';
import Carrucel1 from "../../assets/img/Carrucel.jpg"
import Carrucel2 from "../../assets/img/Carrucel2.jpg"
import Carrucel3 from "../../assets/img/Carrucel3.jpg"
import { useDispatch,/*  useSelector  */} from "react-redux";
import { getGithubUserInfo } from "../../actions/actions";
/* import { Link } from "react-router-dom"; */


export default function Home(){
    const dispatch = useDispatch();
    
useEffect(() => {
    dispatch(getGithubUserInfo());       
}, [dispatch]);


   /*  const search = useSelector((state)=> state.rootReducer.search) */

    return(
        <div className='containerHome'> 
            <div className='ajustarHome'> 
               {/*  <ScrollUpButton/> */}
                <Nav/>
                <Carousel heightMode="first" enableKeyboardControls="true" autoplay="true">
                    <img src={Carrucel1} alt=""/>
                    <img src={Carrucel2} alt=""/>
                    <img src={Carrucel3} alt=""/>
                </Carousel>
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
