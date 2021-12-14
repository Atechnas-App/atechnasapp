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

export const InvitedRoute = () => {
  
  const local = JSON.parse(localStorage.getItem("user"))?
  JSON.parse(localStorage.getItem("user")) : localStorage.getItem("idgit");
  // const isAdmin = localStorage.getItem("isAdmin");

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
        {!local?.id ? local.id : local.idgit && <Redirect from="/perfil/:id" to="/login" />}
        {local?.id ? local.id : local.idgit && <Route exact path="/perfil/:id" component={PerfilPublico} />}
        {local?.id && <Route exact path="/miPerfil/:id" component={PerfilPrivado} />}

        {local?.id  && <Route exact path="/perfil/editarPerfil/:id" component={EditPerfil}/>}
        {!local?.id? local.id : local.idgit && <Route exact path="/login" component={LoginadnRegister} />}
        {local?.id? local.id : local.idgit && <Route exact path="/trabajos/detalle/:id" component={DetallesTrabajo}/>}
        {local?.id ? local.id : local.idgit&& ( <Route exact path="/perfil/crearTrabajos/:id" component={FormTrabajo} />)}
        {local?.id? local.id : local.idgit && <Route exact path="/perfil/editarTrabajos/:id" component={EditarTrabajo} />} {/* agregar /:name/ */ }
  
      </Switch>
    );
}
