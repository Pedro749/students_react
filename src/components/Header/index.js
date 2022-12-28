import React from 'react';
import { Nav } from './style';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <Nav>
        <a>
          <FaHome size={24} />
        </a>
        <a>
          <FaUserAlt size={20} />
        </a>
        <a>
          <FaSignInAlt size={23} />
        </a>
      </Nav>
    </header>
  );
}
