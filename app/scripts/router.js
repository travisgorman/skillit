import {Router, Route, hashHistory} from 'react-router';
import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import MyProfile from './Components/MyProfile';
import EditMyProfile from './Components/EditMyProfile';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/MyProfile" component={MyProfile} />
    <Route path="/EditMyProfile" component={EditMyProfile} />
  </Router>
)
