import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { CompleteRegister } from '../components/form/CompleteRegister';
import { LoginadnRegister } from '../components/form/LoginadnRegister';
import Home from '../components/Home/Home';
import SearchPage from '../components/Searches/SearchPage';
import Perfil from "../components/Perfil/Perfil"
import EditPerfil from '../components/EditPerfil/EditPerfil';
import DetallesTrabajo from '../components/Perfil/Trabajos/DetallesTrabajo';

export const InvitedRoute = () => {
  const local = JSON.parse(localStorage.getItem("user"));
  // const isAdmin = localStorage.getItem("isAdmin");

    return (
      <Switch>
        {/* RUTAS PUBLICAS */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginadnRegister} />
        <Route exact path="/results" component={SearchPage } />
        <Route exact path="/testing" component={DetallesTrabajo}/>
        {/* <Route path="/results?searcher=" component={SearchPage} /> */}


        {/* RUTAS USUARIOS */}
        {!local?.id && <Redirect from="/perfil/:id" to="/login" />}
        {local?.id && <Route exact path="/perfil/:id" component={Perfil} />}
        {local?.id && <Route exact path="/perfil/edit/:id" component={EditPerfil}/>}
        {!local?.id && <Route exact path="/login" component={LoginadnRegister} />}
      </Switch>
    );
}
