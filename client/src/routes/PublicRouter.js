import React from 'react'
import {  Route, Routes } from 'react-router'
import { InvitedRoute } from './InvitedRoute'

export const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<InvitedRoute />} />
           {/*  <InvitedRoute/> */}
        </Routes>
    )
}
