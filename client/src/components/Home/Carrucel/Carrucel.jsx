import React from 'react';
import "./Carrusel.css";
import der from "../../../assets/img/der.png";
import izq from "../../../assets/img/izq.png";

export default function CardsCarrusel() {
  return (
    <div id="conteItemsCarrusel">
      <div className="itemCarrusel" id="itemCarrusel-1">
        <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
          <div
            className="image"
          />
        </div>
        <div className="flechasCarrusel">
          <a href="#itemCarrusel-3">
            <img src={izq} alt="I"/>
          </a>
          <a href="#itemCarrusel-2">
            <img src={der} alt="D"  />
          </a>
        </div>
      </div>
      <div className="itemCarrusel" id="itemCarrusel-2">
        <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
          <div
            className="image2"
          />
        </div>
        <div className="flechasCarrusel">
          <a href="#itemCarrusel-1">
            <img src={izq} alt="I"  />
          </a>
          <a href="#itemCarrusel-3">
            <img src={der} alt="D"  />
          </a>
        </div>
      </div>
      
      <div className="itemCarrusel" id="itemCarrusel-3">
        <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
          <div
            className="image3"
          />
        </div>
        <div className="flechasCarrusel">
          <a href="#itemCarrusel-2">
            <img src={izq} alt="I"/>
          </a>
          <a href="#itemCarrusel-1">
           <img src={der} alt="D"  />
          </a>
        </div>
      </div>
      <div id="contePuntos">
        <a href="#itemCarrusel-1">*</a>
        <a href="#itemCarrusel-2">*</a>
        <a href="#itemCarrusel-3">*</a>
      </div>
    </div>
  );
}


