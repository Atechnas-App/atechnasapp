import React from "react";

// import foto from "../../assets/img/Persona1.png";
import "./Nav.css";
import { Link } from "react-router-dom";


export default function Nav() {

   return (
    <div className="containerNav">
      <Link to="/">
        <h1 className="nombreLogo">ATECHNAS-ADMIN</h1>
      </Link>

      <div>
        <h1 className="panelcontrol-text">PANEL DE CONTROL</h1>
      </div>

      
    </div>
  );
}