import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul className='ul-style'>
        <li className='li-style'>
          <NavLink
            className='links'
            exact
            to='/gameOne'
            activeStyle={{ color: 'goldenrod' }}
          >
            TicTacToe
          </NavLink>
        </li>
        <li className='li-style'>
          <NavLink
            className='links'
            exact
            to='/gameTwo'
            activeStyle={{ color: 'goldenrod' }}
          >
            Dragable List
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
