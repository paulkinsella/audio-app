import '../App.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className="menu-list">
      <NavLink to={{
        pathname: '/',

      }} >
        <li>HOME</li>
      </NavLink>

      <NavLink to={{
        pathname: '/headphones',

      }} >
        <li>HEADPHONES</li>
      </NavLink>
      <NavLink to={{
        pathname: '/speakers',

      }} >
        <li>SPEAKERS</li>
      </NavLink>
      <NavLink to={{
        pathname: '/earphones',

      }} >
        <li>EARPHONES</li>
      </NavLink>
    </ul>
  );
};

export default Menu;