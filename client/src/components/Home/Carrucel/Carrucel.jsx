import React from 'react';
import "./Carrusel.css";
import der from "../../../assets/img/der.png";
import izq from "../../../assets/img/izq.png";

export default function CardsCarrusel() {
  return (
  <div id="slider">
   <input type="radio" name="slider" id="slide1" className='input-c' checked />
   <input type="radio" name="slider" id="slide2" className='input-c'/>
   <input type="radio" name="slider" id="slide3" className='input-c'/>

   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_1">
               <div class="slide-content">
               
               </div>
            </div>
            <div class="slide slide_2">
               <div class="slide-content">
                 
               </div>
            </div>
            <div class="slide slide_3">
               <div class="slide-content">
                  
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide1" className='label-c'></label>
      <label for="slide2" className='label-c'></label>
      <label for="slide3" className='label-c'></label>
   </div>
   <div id="bullets">
      <label for="slide1" className='label-c'></label>
      <label for="slide2" className='label-c'></label>
      <label for="slide3" className='label-c'></label>
   </div>
</div>
    
    // <div id="conteItemsCarrusel">
    //   <div className="itemCarrusel" id="itemCarrusel-1">
    //     <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
    //       <div
    //         className="image"
    //       />
    //     </div>
    //     <div className="flechasCarrusel">
    //       <a href="#itemCarrusel-3">
    //         <img src={izq} alt="I"/>
    //       </a>
    //       <a href="#itemCarrusel-2">
    //         <img src={der} alt="D"  />
    //       </a>
    //     </div>
    //   </div>
    //   <div className="itemCarrusel" id="itemCarrusel-2">
    //     <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
    //       <div
    //         className="image2"
    //       />
    //     </div>
    //     <div className="flechasCarrusel">
    //       <a href="#itemCarrusel-1">
    //         <img src={izq} alt="I"  />
    //       </a>
    //       <a href="#itemCarrusel-3">
    //         <img src={der} alt="D"  />
    //       </a>
    //     </div>
    //   </div>
      
    //   <div className="itemCarrusel" id="itemCarrusel-3">
    //     <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
    //       <div
    //         className="image3"
    //       />
    //     </div>
    //     <div className="flechasCarrusel">
    //       <a href="#itemCarrusel-2">
    //         <img src={izq} alt="I"/>
    //       </a>
    //       <a href="#itemCarrusel-1">
    //        <img src={der} alt="D"  />
    //       </a>
    //     </div>
    //   </div>
    //   <div id="contePuntos">
    //     <a href="#itemCarrusel-1">*</a>
    //     <a href="#itemCarrusel-2">*</a>
    //     <a href="#itemCarrusel-3">*</a>
    //   </div>
    // </div>
  );
}


