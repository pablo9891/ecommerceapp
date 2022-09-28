import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className="svg-container">
            <a href="#"> <img src={cart} alt="Cart Icon"></img></a>
        </div>
    );
};

export default CartWidget;