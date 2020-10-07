import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profiles from './containers/Profiles';
import Profile from './containers/Profile';
import ProfileProvider from "./context/profile-context";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ProfileProvider>
          <Switch>
            <Route path="/profile/:id" component={Profile} />
            <Route path="/" component={Profiles} />
          </Switch>
        </ProfileProvider>
      </div>
    </div>
  );
}

export default App;
