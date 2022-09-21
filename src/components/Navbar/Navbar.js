import "./Navbar.css"

import NavbarHeader from "../NavbarHeader/NavbarHeader";
import NavbarItems from "../NavbarItems/NavbarItems";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-presentation">
          <NavbarHeader />
          <NavbarItems />
        </div>
        <div className="cart-widget-presentation">
          <CartWidget />
        </div>
      </div>
    </div>
    );
};

export default Navbar;