import React from "react";
import { Route, Routes } from "react-router";
import SearchPage from "../components/Searches/SearchPage";
import Perfil from "../components/Perfil/Perfil"

export const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/results" element={<SearchPage />} />
      {/* <Route exact path="/:id" element={<Perfil />} /> */}
    </Routes>
  );
};
