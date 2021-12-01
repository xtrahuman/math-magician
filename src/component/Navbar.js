import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'calculator',
    },
    {
      id: 3,
      path: '/Quotes',
      text: 'Quotes',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li className="li" key={link.id}>
            <NavLink to={link.path} className={(navData) => (navData.isActive ? 'active-link' : '')}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
