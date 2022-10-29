import cart from './assets/cart.svg';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import { useContext} from 'react';

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    const totalQuantity = getTotalQuantity();

    return(
        <div className='widget-container'>
            <div className='svg-container'>
                <Link to='/cart'>
                    <img src={cart} alt="Cart Icon"></img>
                </Link>     
            </div>
            <div className='number-container'>
                <Link to='/cart' className='widget-container'>
                { (totalQuantity === 0) ? "" : totalQuantity }
                </Link>     
            </div>
        </div>
    );
}

export default CartWidget;