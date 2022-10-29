import './Cart.css';
import { useContext } from "react";
import { CartContext } from '../../context/CartContext/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext);

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link className="cart-checkout" to='/'>Seguir comprando</Link>
            </div>
        );
    }

    return (     
        <div className='cart-items-container'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <div className='cart-commands-and-info-row'>
                <div className='cart-commands-and-info'>
                    <div>
                        <h3>Total: ${total}</h3>
                    </div>
                    <div className='cart-commands'>
                        <div className='clear-cart-button'>
                            <a className="cart-checkout" onClick={() => clearCart()}>Limpiar carrito</a>
                        </div>
                        <div className='link-cart-button'>
                            <Link className="cart-checkout" to='/checkout'>Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;