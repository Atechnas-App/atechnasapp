import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { CompleteRegister } from '../components/form/CompleteRegister';
import { LoginadnRegister } from '../components/form/LoginadnRegister';
import Home from '../components/Home/Home';
import SearchPage from '../components/Searches/SearchPage';

export const InvitedRoute = () => {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginadnRegister} />
        <Route exact path="/results" component={SearchPage} />
        <Route exact path="/completeregister" component={CompleteRegister} />
      </Switch>
    );
}
