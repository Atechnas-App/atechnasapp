import React from 'react'
import { Route, Routes } from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import { LoginadnRegister } from '../components/form/LoginadnRegister'
import Home from '../components/Home/Home'
import SearchPage from '../components/Searches/SearchPage'


export const AppRoutes = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="login" element={<LoginadnRegister/>}/>
            <Route path="/results" element={<SearchPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}
