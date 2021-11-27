import React from "react";
import { Route, Routes } from "react-router";
import SearchPage from "../components/Searches/SearchPage";
import { Welcome } from "../components/welcome/Welcome";

export const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/results" element={<SearchPage />} />
    </Routes>
  );
};
