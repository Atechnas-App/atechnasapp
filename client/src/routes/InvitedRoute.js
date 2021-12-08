import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { CompleteRegister } from '../components/form/CompleteRegister';
import { LoginadnRegister } from '../components/form/LoginadnRegister';
import Home from '../components/Home/Home';
import SearchPage from '../components/Searches/SearchPage';
import Perfil from "../components/Perfil/Perfil"
import EditPerfil from '../components/EditPerfil/EditPerfil';
import DetallesTrabajo from '../components/Perfil/Trabajos/DetallesTrabajo';
import { Form } from "../components/Perfil/Trabajos/Form";
import { EditarTrabajo } from '../components/Perfil/Trabajos/EditarTrabajo';


export const InvitedRoute = () => {
  const local = JSON.parse(localStorage.getItem("user"));
  // const isAdmin = localStorage.getItem("isAdmin");

  return (
    <Switch>
      {/* RUTAS PUBLICAS */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginadnRegister} />
      <Route exact path="/results" component={SearchPage} />
      {/* <Route path="/results?searcher=" component={SearchPage} /> */}


        {/* RUTAS USUARIOS */}
        {!local?.id && <Redirect from="/perfil/:id" to="/login" />}
        {local?.id && <Route exact path="/perfil/:id" component={Perfil} />}
        {local?.id && <Route exact path="/perfil/edit/:id" component={EditPerfil}/>}
        {!local?.id && <Route exact path="/login" component={LoginadnRegister} />}
        {local?.id && <Route exact path="/trabajos/detalle/:id" component={DetallesTrabajo}/>}
        {local?.id && (
          <Route exact path="/perfil/edit/trabajos/:id" component={Form} />
        )}
        <Route exact path="/trabajos/edit/:id" component={EditarTrabajo} />
  
      </Switch>
    );
}
