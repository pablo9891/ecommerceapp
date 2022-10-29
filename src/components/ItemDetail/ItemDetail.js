import './ItemDetail.css';
import ItemCounter from '../ItemCounter/ItemCounter';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext/CartContext'

const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const initialProductStock = 1;

    const {addItem} = useContext(CartContext);

    function onAddHandler(quantity) {
        setQuantityToAdd(quantity);
        const product = {
            id, name, price, quantity, category
        };
        addItem(product);
    }

    return(
        <div className="item-container">
            <div className="cart-image-container"><img src={img} alt="Producto"></img></div>
            <div className="cart-product-header"><h2>{name}</h2></div>
            <div className="cart-product-detail"><h3>{description}</h3></div>
            <div className="cart-price"><h3>{stock !== 0 ? "Stock: " + stock : "Sin stock"}</h3></div>
            <div className="cart-price"><h3>{price}$</h3></div>
            {
                quantityToAdd === 0 ? (
                    <ItemCounter onAdd={onAddHandler} stock={stock} initialProductStock={initialProductStock}/>
                ) : (
                    <Link className="end-buying" to='/cart'>Comprar</Link>
                )
            }
        </div>
    );
};

export default ItemDetail;