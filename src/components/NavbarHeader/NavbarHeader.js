import './NavbarHeader.css'
import { Link } from "react-router-dom"

const NavbarHeader = () => {
    return(
        <div className="navbar-header-container">
            <Link to={`/`}>TiendaDePablo</Link>
        </div>
        
    );
};

export default NavbarHeader;