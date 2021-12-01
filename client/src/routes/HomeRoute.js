import React from "react";
import { Route, Routes } from "react-router";
import SearchPage from "../components/Searches/SearchPage";


export const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/results" element={<SearchPage />} />
    </Routes>
  );
};
