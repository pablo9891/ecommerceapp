import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const { productId } = useParams();
    useEffect(() => {
        setLoading(true);
        const documentReference = doc(db, 'products', productId);
        getDoc(documentReference).then(res => {
            const data = res.data();
            const productsAdapted = {id: res.id, ...data};
            setProduct(productsAdapted);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    }, [productId]);

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return (
            <div>
                <h1>Error al recuperar datos</h1>
                <Link className="go-back-button" to='/'>Seguir comprando</Link>
            </div>
        );
    }

    return (
        <div className='itemDetailcontainer'>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;