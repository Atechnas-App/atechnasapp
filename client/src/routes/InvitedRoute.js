import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { CompleteRegister } from '../components/form/CompleteRegister';
import { LoginadnRegister } from '../components/form/LoginadnRegister';
import Home from '../components/Home/Home';
import SearchPage from '../components/Searches/SearchPage';
import PerfilPrivado from "../components/Perfil/PerfilPrivado"
import PerfilPublico from "../components/Perfil/PerfilPublico"
import EditPerfil from '../components/EditPerfil/EditPerfil';
import DetallesTrabajo from '../components/Perfil/Trabajos/DetallesTrabajo';
import { Form } from "../components/Perfil/Trabajos/Form";
import EditarTrabajo from '../components/Perfil/Trabajos/EditarTrabajo';


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
        {local?.id && <Route exact path="/perfil/:id" component={PerfilPublico} />}
        {local?.id && <Route exact path="/miPerfil/:id" component={PerfilPrivado} />}

        {local?.id && <Route exact path="/perfil/editarPerfil/:id" component={EditPerfil}/>}
        {!local?.id && <Route exact path="/login" component={LoginadnRegister} />}
        {local?.id && <Route exact path="/trabajos/detalle/:id" component={DetallesTrabajo}/>}
        {local?.id && (
          <Route exact path="/perfil/crearTrabajos/:id" component={Form} />
        )}
        <Route exact path="/perfil/editarTrabajos/:id" component={EditarTrabajo} /> {/* agregar /:name/ */ }
  
      </Switch>
    );
}
