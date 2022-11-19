import './CartForm.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import { NotificationContext } from '../../context/NotificationContext/NotificationContext';
import { CartContext } from '../../context/CartContext/CartContext';

const CartForm = () => {
    const { cart, total } = useContext(CartContext);

    const [newOrder, setNewOrder] = useState({});
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const { setNotification } = useContext(NotificationContext)
    
    const isValidString = (text) => {
        return text !== "";
    }
    
    const isValidNoNumberString = (text) => {
        return isValidString(text) && !/\d/.test(text);
    }
    
    const isValidNumber = (number) => {
        return isValidString(number) && !isNaN(number);
    }
    
    const isDataFormValid = (number) => {
        if(!isValidNoNumberString(name)) {
            setNotification('error', `El nombre no es valido`);
            return false;
        }
        if(!isValidString(address)) {
            setNotification('error', `La dirección no es valido`);
            return false;
        }        
        if(!isValidNumber(phone)) {
            setNotification('error', `El telefono no es valido`);
            return false;
        }
        if(!isValidString(email)) {
            setNotification('error', `El email no es valido`);
            return false;
        }
        return true;
    }
    
    const createOrder = () => {
        let newOrder = {};
        let buyer = {};
    
        if(!isDataFormValid()) {
            return;
        }
    
        newOrder["items"] = cart;
        newOrder["total"] = total;
        
        buyer["name"] = name;
        buyer["phone"] = phone;
        buyer["email"] = email;
        buyer["address"] = address;
    
        newOrder["buyer"] = buyer;
        setNewOrder(newOrder);
        setShouldRedirect(true);
    }

    if(shouldRedirect) {
        return <Navigate to="/checkout" state={{newOrder: newOrder}} />
    }
    
    return (
        <div className='form-container'>
        <h2>Necesitamos confirmar algunos datos...</h2>
        <div className='form-row'>
            <div className="form-item-row">
                <div className='form-item-row-label'>
                    <h3>Nombre y Apellido</h3>
                </div>
                <input value={name} type="text" placeholder='Ingrese nombre' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="form-item-row">
                <div className='form-item-row-label'>
                    <h3>Dirección</h3>

                </div>
                <input value={address} type="text" placeholder='Ingrese dirección' onChange={(e) => setAddress(e.target.value)}></input>
            </div>
            <div className="form-item-row">
                <div className='form-item-row-label'>
                    <h3>Telefono</h3>
                </div>
                <input type="text" placeholder='Ingrese telefono' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            </div>
            <div className="form-item-row">
                <div className='form-item-row-label'>
                    <h3>Email</h3>
                </div>
                <input type="text" placeholder='Ingrese email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
        </div>
        <div className='confirm-buttons-row'>
            <Link className="create-order-checkout" to="/cart">Volver</Link>
            <a className="create-order-checkout" onClick={() => createOrder()}>Finalizar Compra</a>
        </div>
    </div>
    );    
}

export default CartForm;




