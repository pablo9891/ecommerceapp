import './Item.css';
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return(
         <div className="item-list-container">
            <div className="cart-image-container"><img src={product.img} alt="Producto"></img></div>
            <div className="cart-product-header"><Link to={`/detail/${product.id}`} key={product.id}><h2>{product.name}</h2></Link></div>
            <div className="cart-price"><h3>{product.price}$</h3></div>
            <div className='detail-button'><Link to={`/detail/${product.id}`}>Ver detalle</Link></div>
        </div>
    );
};

export default Item;