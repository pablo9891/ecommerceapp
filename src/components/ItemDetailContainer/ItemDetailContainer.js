import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const { productId } = useParams();
    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response);
        }).catch(error => {
            console.log(error);
            setError(true);
        }).finally(() => {
            setLoading(false);
        });
    }, [productId]);

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Error al recuperar datos</h1>
    }
    
    return (
        <div className='itemDetailcontainer'>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;