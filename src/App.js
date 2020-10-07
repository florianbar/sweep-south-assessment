import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Profiles from './containers/Profiles';
import Profile from './containers/Profile';
import ProfileProvider from "./context/profile-context";
import './App.css';

const App = props => {
  return (
    <div className="App">
      <div className="container">
        <ProfileProvider>
          <Switch>
            <Route path="/profile/:id" component={Profile} />
            <Route path="/" exact component={Profiles} />
            <Redirect to="/" />
          </Switch>
        </ProfileProvider>
      </div>
    </div>
  );
}

export default App;
