import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './style';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Nav>
        <Link to={'/'}>
          <FaHome size={24} />
        </Link>
        <Link to={'/login'}>
          <FaUserAlt size={20} />
        </Link>
        <Link to={'/login'}>
          <FaSignInAlt size={23} />
        </Link>
      </Nav>
    </header>
  );
}
