import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './static/App.css';
import Hero from './screens/Hero'
import NotFound from './components/NotFound'
import Register from './screens/Sign-up'
import Login from './screens/Sign-in'
import User from './screens/User';
import Reset from './screens/Resetpassword'
import db from './config/db'
import PrivateRoute from './Private';
import PublicRoute from './Public';

function App() {
  const [authenticated, setAuthenticated] = useState(true)
  const [user, setUser] = useState(null)
  const listenUser = () => {
    const usersRef = db.database();
    db.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .ref(`u/${user.uid}`)
          .once('value')
          .then((snapshot) => {
            const userData = snapshot.val();
            setAuthenticated(true)
            setUser(userData)
          })
          .catch(() => {
            setAuthenticated(false)
          });
      } else {
        setAuthenticated(false)
        setUser(null)
      }
    });
  }
  useEffect(() => {
    listenUser()
  }, [authenticated])
  return (
    <Router>
      <Switch>
        <PublicRoute authenticated={authenticated} path="/" component={Hero} exact></PublicRoute>
        <PublicRoute authenticated={authenticated} path="/register" component={Register} exact></PublicRoute>
        <PublicRoute authenticated={authenticated} path="/login" component={Login} exact></PublicRoute>
        <PublicRoute authenticated={authenticated} path="/reset-password" component={Reset} exact></PublicRoute>
        <PrivateRoute authenticated={authenticated} path="/user" component={User} exact></PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
