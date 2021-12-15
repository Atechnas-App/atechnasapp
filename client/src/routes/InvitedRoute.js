import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import Home from "../components/Home/Home";
import { LoginadnRegister } from "../components/form/LoginadnRegister";
import SearchPage from "../components/Searches/SearchPage";
import Error404 from "../components/Error404/Error404";
import SobreNosotros from "../components/Footer/sobreNosotros";
import PregResp from "../components/Footer/pregResp";
import Contactanos from "../components/Footer/Contactanos";
import PerfilPublico from "../components/Perfil/PerfilPublico";
import PerfilPrivado from "../components/Perfil/PerfilPrivado";
import EditPerfil from "../components/EditPerfil/EditPerfil";
import DetallesTrabajo from "../components/Perfil/Trabajos/DetallesTrabajo";
import FormTrabajo from "../components/Perfil/Trabajos/FormTrabajo";
import EditarTrabajo from "../components/Perfil/Trabajos/EditarTrabajo";
import Terms from "../components/Footer/terminosCondiciones";
export const InvitedRoute = () => {
  
  const local = JSON.parse(localStorage.getItem("user"))
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
      <Route exact path="/Admin/menu" component={ControlPanel}/>
      <Route exact path="/Admin/publicaciones" component={Publications}/>
      <Route exact path="/Admin/login" component={LoginAdmin}/>

      {/* <Route path="/results?searcher=" component={SearchPage} /> */}


        {/* RUTAS USUARIOS */}
        {!local?.id && <Redirect from="/perfil/:id" to="/login" />}
        {local?.id  && <Route exact path="/perfil/:id" component={PerfilPublico} />}
        {local?.id && <Route exact path="/miPerfil/:id" component={PerfilPrivado} />}

        {local?.id  && <Route exact path="/perfil/editarPerfil/:id" component={EditPerfil}/>}
        {!local?.id && <Route exact path="/login" component={LoginadnRegister} />}
        {local?.id && <Route exact path="/trabajos/detalle/:id" component={DetallesTrabajo}/>}
        {local?.id && ( <Route exact path="/perfil/crearTrabajos/:id" component={FormTrabajo} />)}
        {local?.id && <Route exact path="/perfil/editarTrabajos/:id" component={EditarTrabajo} />} {/* agregar /:name/ */ }
  
      </Switch>
    );
}
