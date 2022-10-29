import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';

const CartItem = ({ id, name, quantity, price }) => {
    const { removeProductFromCart } = useContext(CartContext);

    const handleRemove = (id) => {
        removeProductFromCart(id);
    }

    return (
        <div className='item-cart-container'>
            <div className='header-container'>
                <h2>{name}</h2>
            </div>
            <div className='item-detail-info'>
                <div className='quantity-info'>
                    <h4>Cantidad: {quantity}</h4>
                </div>
                <div className='price-info'>
                    <h4>Precio x Unidad: ${price}</h4>
                </div>
                <div className='subtotal-info'>
                    <h4>Subtotal: ${price * quantity}</h4>
                </div>
            </div>
            <div className='button-info'>
                <a className="remove-button" onClick={() => handleRemove(id)}>X</a>
            </div>
        </div>

    );
}

export default CartItem;