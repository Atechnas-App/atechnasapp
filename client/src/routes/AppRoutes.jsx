import React from 'react'
/* import { Route } from 'react-router' */
import { InvitedRoute } from "./InvitedRoute";
import { HomeRoute } from "./HomeRoute"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';



export const AppRoutes = () => {

const {logued} = useSelector(state => state.auth)

  return (
    <div>
        <BrowserRouter>          
          <Switch>
            <Route   
                   
              path="/"
              component={InvitedRoute}
              isAutenticated={logued?.log}
              />
            <Route
             path="/"
             component={HomeRoute}
             isAutenticated={logued?.log}
             />
              
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  