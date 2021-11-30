import React from 'react'
// import { Route } from 'react-router'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { InvitedRoute } from "./InvitedRoute";
import { HomeRoute } from './HomeRoute'


export const AppRoutes = () => {
    return (
      <div>
        <BrowserRouter>          
          <Switch>
            <Route
              path="/"
              component={InvitedRoute}
              />
            <Route
              path="/"
              component={HomeRoute}
              />
              {/* <PrivateRouter> */}
              {/* </PrivateRouter> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
}
