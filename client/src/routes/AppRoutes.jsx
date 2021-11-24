import React from 'react'
import { Route, Routes } from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Home from '../components/Home/Home'


export const AppRoutes = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}
