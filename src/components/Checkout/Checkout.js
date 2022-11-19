import './Checkout.css';
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase';

const Checkout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [shouldShowSuccessMessage, setShouldShowSuccessMessage] = useState(false);
    const [shouldShowNoStockErrorMessage, setShouldShowNoStockErrorMessage] = useState(false);
    const [shouldShowGenericErrorMessage, setShouldShowGenericErrorMessage] = useState(false);
    const { cart, clearCart } = useContext(CartContext);
    const newOrder = location.state.newOrder;

    const processDbResponse = (batch, doc) => {
        const outOfStock = [];
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const id = doc.id;

        const productAddedToCart = cart.find(prod => prod.id === id);
        const prodQuantity = productAddedToCart?.quantity;

        if(stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
            outOfStock.push({ id: id, ...dataDoc});
        }
        return outOfStock.length === 0;
    }

    const updateDb = (batch) => {
        batch.commit();
        const orderRef = collection(db, 'orders');
        addDoc(orderRef, newOrder);
        clearCart();
        setShouldShowSuccessMessage(true);
    }

    const confirmOrder = async () => {
        setLoading(true);
        try {        
            const ids = cart.map(prod => prod.id);
            const {docs} = await getDocs(query(collection(db, 'products'), where(documentId(), 'in' , ids)));
            const batch = writeBatch(db);
            let shouldThrowNoStockError = false;

            docs.forEach(doc => {
                shouldThrowNoStockError = processDbResponse(batch, doc);
            });

            if(shouldThrowNoStockError) {
                updateDb(batch);
            } else {
                setShouldShowNoStockErrorMessage(true);
                console.log('Hay productos fuera de stock');
            }
        } catch (error) {
            setShouldShowGenericErrorMessage(true);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return <h1>Ya casi es tuyo!!!</h1>
    }

    if(shouldShowSuccessMessage) {
        return (
            <div>
                <h1>La compra fue exitosa!!</h1>
                <Link className="create-order-checkout" to='/'>Seguir comprando</Link>
            </div>
            );
    }

    if(shouldShowNoStockErrorMessage) {
        return (
            <div>
                <h1>No hay stock para algunos de los productos :(</h1>
                <Link className="create-order-checkout" to='/cart'>Ver pedido</Link>
            </div>
        );
    }

    if(shouldShowGenericErrorMessage) {
        return(
            <div>
                <h1>Error al generar la compra :(</h1>
                <Link className="create-order-checkout" to='/cart'>Ver pedido</Link>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <div className="item-confirm-row">
                <h3>Nombre y Apellido</h3>
                <h3>{newOrder.buyer.name}</h3>
            </div>
            <div className="item-confirm-row">
                <h3>Dirección</h3>
                <h3>{newOrder.buyer.address}</h3>
            </div>
            <div className="item-confirm-row">
                <h3>Telefono</h3>
                <h3>{newOrder.buyer.phone}</h3>
            </div>
            <div className="item-confirm-row">
                <h3>Email</h3>
                <h3>{newOrder.buyer.email}</h3>
            </div>
            <div className="item-confirm-row">
                <h3>Total</h3>
                <h3>${newOrder.total}</h3>
            </div>
            <div className='confirm-buttons-row'>
                <Link className="create-order-checkout" to="/cart">Volver</Link>
                <a className="create-order-checkout" onClick={confirmOrder}>Finalizar Compra</a>
            </div>
        </div>
    );
};

export default Checkout;