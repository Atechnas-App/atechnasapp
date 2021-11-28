import React from 'react'
import {  Route, Routes} from 'react-router'
import { HomeRoute } from './HomeRoute'

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            {/* <HomeRoute/> */}
        </Routes>
            
        
    )
}
