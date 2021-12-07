import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';

export const PublicRouter = ({isAutenticated,
component: Component,
...rest}) => {
    return (
      <Switch>
     <Route 
      {...rest}       
      component={(props)=>
          (!isAutenticated)
          ?
          <Component {...props}/> 
          :
          <Redirect to="/"/>
      } 
           />
     </Switch>
    )
}
