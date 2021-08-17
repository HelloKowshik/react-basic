import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import About from './About';
import ErrorPage from './Error';
import Home from './Home';
import Nav from './Nav';
import ProtectedPage from './ProtectedPage';

const Index = () => {
  const [login, setLogIn] = useState(false);
  const handleClick = () => setLogIn(!login);
  return (
    <Router>
      <Nav handleClick={handleClick} login={login} />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/user/:name'
            render={({ match }) => <h1>Welcome {match.params.name}</h1>}
          />
          <Route
            to='/admin'
            render={() => {
              return login ? <ProtectedPage /> : <Redirect to='/' />;
            }}
          />
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Index;
