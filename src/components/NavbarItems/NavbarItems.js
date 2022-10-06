import './NavbarItems.css'
import { Link } from "react-router-dom"

const NavbarItems = () => {
    return (
        <div className="navbar-items">
            <Link to={`/category/1`} key={1}>Hogar</Link>
            <Link to={`/category/2`} key={2}>Electronica</Link>
            <Link to={`/category/3`} key={3}>Libros</Link>
            <Link to={`/category/4`} key={4}>Mascotas</Link>
        </div>
    );
};

export default NavbarItems;