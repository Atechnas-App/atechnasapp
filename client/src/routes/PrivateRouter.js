import React from 'react'
import { Route,  Switch } from 'react-router-dom'
import { HomeRoute } from './HomeRoute'

export const PrivateRouter = () => {
    return (
        <Switch>
            <Route  path="/" component={HomeRoute} />
            {/* <HomeRoute/> */}
        </Switch>
            
        
    )
}
