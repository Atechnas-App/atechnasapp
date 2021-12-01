import React from "react";
import { Route, Switch  } from "react-router-dom";
import SearchPage from "../components/Searches/SearchPage";


export const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path="/results" component={SearchPage} />
    </Switch>
  );
};
