import React from 'react'
import { Route, Routes } from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { InvitedRoute } from "./InvitedRoute";
import { HomeRoute } from './HomeRoute'


export const AppRoutes = () => {
    return (
      <div>
        <BrowserRouter>
          
          <Routes>
            <Route
              path="/*"
              element={
                <InvitedRoute />
              }
              />
              

            <Route
              path="/*"
              element={
                <HomeRoute />
              }
              />
              {/* <PrivateRouter> */}
              {/* </PrivateRouter> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
}
