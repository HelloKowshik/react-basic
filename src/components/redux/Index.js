import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Deposit from './Deposit';
import Home from './Home';
import Withdraw from './Withdraw';

const Index = () => {
  return (
    <Router>
      <ul className='ul-style'>
        <li className='li-style'>
          <NavLink
            className='links'
            exact
            to='/'
            activeStyle={{ color: 'goldenrod' }}
          >
            Home
          </NavLink>
        </li>
        <li className='li-style'>
          <NavLink
            className='links'
            exact
            to='/deposit'
            activeStyle={{ color: 'goldenrod' }}
          >
            Deposit
          </NavLink>
        </li>
        <li className='li-style'>
          <NavLink
            className='links'
            exact
            to='/withdraw'
            activeStyle={{ color: 'goldenrod' }}
          >
            Withdraw
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/deposit' component={Deposit}></Route>
        <Route path='/withdraw' component={Withdraw}></Route>
      </Switch>
    </Router>
  );
};

export default Index;
