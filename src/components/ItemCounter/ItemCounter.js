import './ItemCounter.css';
import { useState, useContext } from 'react'
import { NotificationContext } from '../../context/NotificationContext/NotificationContext'

const ItemCounter = ({stock, initialProductStock, onAdd}) => {
    const [productQuantity, setProductQuantity] = useState(initialProductStock);
    const { setNotification } = useContext(NotificationContext)

    function increment() {
        if((productQuantity + 1) <= stock)
            setProductQuantity(productQuantity + 1);
    }
    function decrement() {
        if((productQuantity - 1) >= 1)
            setProductQuantity(productQuantity - 1);
    }

    function redirectBuyButton(productQuantity) {
        if(productQuantity > stock) {
            setNotification('error', `La cantidad pedida excede al stock`)
            return;
        }
        setNotification('success', `Agregado exitosamente`)
        onAdd(productQuantity);
    }

    return(
        <div className="product-counter-container">
            <div className="product-counter">
                <a className="function-button" onClick={decrement}>-</a>
                <input type="text" placeholder={productQuantity} />
                <a className="function-button" onClick={increment}>+</a>
            </div>
            <a className="add-cart-checkout" onClick={() => redirectBuyButton(productQuantity)}>Agregar al carrito</a>
        </div>
    );
};

export default ItemCounter;