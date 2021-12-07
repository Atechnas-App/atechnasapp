import React from 'react'
import { Route, Switch } from "react-router-dom";
import{Redirect} from 'react-router'

export const PrivateRouter = ({isAutenticated, component: Component, ...rest}) => {
    localStorage.setItem("lastPath", rest.location.pathname);
    return (
      <Switch>
        <Route
          component={(props) =>
            (isAutenticated)
            ?
            <Redirect to="login" />
            : 
            <Component {...props} />
          }
        />
      </Switch>
    );
}
