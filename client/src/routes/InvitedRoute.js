import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { LoginadnRegister } from '../components/form/LoginadnRegister';
import Home from '../components/Home/Home';
import SearchPage from '../components/Searches/SearchPage';
import Perfil from "../components/Perfil/Perfil"


export const InvitedRoute = () => {
  const local = JSON.parse(localStorage.getItem("user"));
  // const isAdmin = localStorage.getItem("isAdmin");

    return (
      <Switch>
        {/* RUTAS PUBLICAS */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginadnRegister} />
        <Route exact path="/results" component={SearchPage } />          
      </Switch>
    );
}
 