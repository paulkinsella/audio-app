import SideBar from "../Sidebar/sidebar";
import CartIcon from '../SVG/CartIcon';
import Logo from '../SVG/Logo.js';
import Menu from '../Menu/Menu';
import './Header.css';

const Header = () => {

  return (
    <div className="menu-background-conatiner">
      <div className="menu-container">
        <div className="test-one">
          <div className='logo-area'>
            <Logo />
          </div>
          <div className="menu-item">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          </div>
        </div>
        <div className="test-two">
          <div className='logo-area'>
            <Logo />
          </div>
          <Menu />
        </div>
        <div className="test-three">
          <div className='cart-area'>
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;