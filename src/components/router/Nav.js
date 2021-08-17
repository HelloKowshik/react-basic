import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ handleClick, login }) => {
  return (
    <div>
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
            to='/about'
            activeStyle={{ color: 'goldenrod' }}
          >
            About
          </NavLink>
        </li>
        <li className='li-style'>
          <NavLink
            className='links'
            exact
            to='/admin'
            activeStyle={{ color: 'goldenrod' }}
          >
            Admin
          </NavLink>
        </li>
      </ul>
      <button className='btn' onClick={handleClick}>
        {login ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default Nav;
