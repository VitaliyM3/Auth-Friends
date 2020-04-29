import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login" >Login</Link>
          </li>
          <li>
            <Link to="/friends" >Friends</Link>
          </li>
          <li>
            <Link to="/newfriends" >Add A New Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute path="/newfriends" component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
