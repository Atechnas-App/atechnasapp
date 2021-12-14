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
import Error404 from '../components/Error404/Error404'
import Contactanos from '../components/Footer/Contactanos'
import SobreNosotros from '../components/Footer/sobreNosotros'
import PregResp from '../components/Footer/pregResp'
import Terms from '../components/Footer/terminosCondiciones'


export const InvitedRoute = () => {
  const local = JSON.parse(localStorage.getItem("user"));
  // const isAdmin = localStorage.getItem("isAdmin");
  const githubUser = JSON.parse(localStorage.getItem("idgit"))
  return (
    <Switch>
      {/* RUTAS PUBLICAS */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginadnRegister} />
      <Route exact path="/results" component={SearchPage} />
      <Route exact path="/error" component={Error404} />
      <Route exact path="/sobreNosotros" component={SobreNosotros}/>
      <Route exact path="/FAQ" component={PregResp}/>
      <Route exact path="/contactanos" component={Contactanos}/>
      <Route exact path="/terms" component={Terms}/>
      <Route exact path='/contactanos' component={Contactanos}/>


      {/* <Route path="/results?searcher=" component={SearchPage} /> */}


        {/* RUTAS USUARIOS */}
        {(!local?.id || !githubUser) && <Redirect exact from="/perfil/:id" to="/login" />}
        {(!local?.id || !githubUser) && <Redirect from="/miPerfil/:id" to="/error" />}
        {(!local?.id || !githubUser) && <Redirect from="/perfil/editarPerfil/:id" to="/error" />}
        {(!local?.id || !githubUser) && <Redirect from="/trabajos/detalle/:id" to="/error" />}
        {(!local?.id || !githubUser) && <Redirect from="/perfil/crearTrabajos/:id" to="/error" />}
        {(!local?.id || !githubUser) && <Redirect from="/perfil/editarTrabajos/:id" to="/error" />}
        {(!local?.id || !githubUser) && <Route exact path="/login" component={LoginadnRegister} />}
        {(local?.id || githubUser) && <Route exact path="/perfil/:id" component={PerfilPublico} />}
        {(local?.id || githubUser) && <Route exact path="/miPerfil/:id" component={PerfilPrivado} />}
        {(local?.id || githubUser) && <Route exact path="/perfil/editarPerfil/:id" component={EditPerfil}/>}
        {(local?.id || githubUser) && <Route exact path="/trabajos/detalle/:id" component={DetallesTrabajo}/>}
        {(local?.id || githubUser) && <Route exact path="/perfil/crearTrabajos/:id" component={Form} />}
        {(local?.id || githubUser) && <Route exact path="/perfil/editarTrabajos/:id" component={EditarTrabajo} />} {/* agregar /:name/ */ }
        
      </Switch>
    );
}
