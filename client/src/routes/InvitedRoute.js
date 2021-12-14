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
import Testimonials from '../components/Admin/Testimonials';
import Publications from '../components/Admin/Publications';


export const InvitedRoute = () => {
  const local = JSON.parse(localStorage.getItem("user"));
  // const isAdmin = localStorage.getItem("isAdmin");
  // const githubUser = JSON.parse(localStorage.getItem("idgit"))
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
      <Route exact path="/Admin/testimonios" component={Testimonials}/>
      <Route exact path="/Admin/publicaciones" component={Publications}/>

      {/* <Route path="/results?searcher=" component={SearchPage} /> */}


        {/* RUTAS USUARIOS */}
        {(!local?.id ) && <Redirect exact from="/perfil/:id" to="/login" />}
        {(!local?.id ) && <Redirect from="/miPerfil/:id" to="/error" />}
        {(!local?.id ) && <Redirect from="/perfil/editarPerfil/:id" to="/error" />}
        {(!local?.id ) && <Redirect from="/trabajos/detalle/:id" to="/error" />}
        {(!local?.id ) && <Redirect from="/perfil/crearTrabajos/:id" to="/error" />}
        {(!local?.id ) && <Redirect from="/perfil/editarTrabajos/:id" to="/error" />}
        {(!local?.id ) && <Route exact path="/login" component={LoginadnRegister} />}
        {(local?.id) && <Route exact path="/perfil/:id" component={PerfilPublico} />}
        {(local?.id) && <Route exact path="/miPerfil/:id" component={PerfilPrivado} />}
        {(local?.id) && <Route exact path="/perfil/editarPerfil/:id" component={EditPerfil}/>}
        {(local?.id) && <Route exact path="/trabajos/detalle/:id" component={DetallesTrabajo}/>}
        {(local?.id) && <Route exact path="/perfil/crearTrabajos/:id" component={Form} />}
        {(local?.id) && <Route exact path="/perfil/editarTrabajos/:id" component={EditarTrabajo} />} {/* agregar /:name/ */ }
        
      </Switch>
    );
}
