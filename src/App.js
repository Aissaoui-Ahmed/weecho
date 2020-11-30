import './static/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from './screens/Hero'
import NotFound from './components/NotFound'
import Register from './screens/Sign-up'
import Login from './screens/Sign-in'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
