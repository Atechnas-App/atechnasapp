import React from 'react'
import { Route, Switch } from "react-router-dom";
import { InvitedRoute } from './InvitedRoute'

export const PublicRouter = () => {
    return (
        <Switch>
            <Route path="/" element={InvitedRoute} />
           {/*  <InvitedRoute/> */}
        </Switch>
    )
}
