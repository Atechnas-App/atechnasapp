import React from 'react'
import { Route, Routes } from 'react-router';
import { CompleteRegister } from '../components/form/CompleteRegister';
import { LoginadnRegister } from '../components/form/LoginadnRegister';
import Home from '../components/Home/Home';
import SearchPage from '../components/Searches/SearchPage';
import Perfil from "../components/Perfil/Perfil"

export const InvitedRoute = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginadnRegister />} />
        <Route path="/results" element={<SearchPage />} />
        <Route path="/completeregister" element={<CompleteRegister />} />
        {/* <Route exact path="/id" component={<Perfil />} /> */}
      </Routes>
    );
}
