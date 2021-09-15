import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = props => {
  return (
    <Menu {...props}>

      <a className="menu-item" href="/">
        HOME
      </a>

      <a className="menu-item" href="/headphones">
        HEADPHONES
      </a>

      <a className="menu-item" href="/speakers">
        SPEAKERS
      </a>

      <a className="menu-item" href="/earphones">
        EARPHONES
      </a>

    </Menu>
  );
};

export default Sidebar;