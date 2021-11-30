import React from 'react'
/* import { Route } from 'react-router' */
import { InvitedRoute } from "./InvitedRoute";
import { HomeRoute } from "./HomeRoute"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { useContext } from "react";


export const AppRoutes = () => {


  return (
    <div>
        <BrowserRouter>          
          <Switch>
            <Route
              path="/"
              component={
                InvitedRoute
              }
              />
            <Route
             path="/"
             component={HomeRoute}
             />
              
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  