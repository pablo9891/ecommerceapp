import './itemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategoryId } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [areNoProductsToShow, setAreNoProductsToShow] = useState(false);

    const { categoryId } = useParams();
    useEffect(() => {
        if(!categoryId) {
            getProducts().then(res => {
                setProducts(res);
                setAreNoProductsToShow(false);
            }).catch(error => {
                setError(true);
            }).finally(() => {
                setLoading(false);
            });
        } else {
            getProductsByCategoryId(categoryId).then(res => {
                if(res.length != 0) {
                    setAreNoProductsToShow(false);
                } else {
                    setAreNoProductsToShow(true);
                }
                setProducts(res);
            }).catch(error => {
                console.log(error);
                setError(true);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, [categoryId]);

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Error al recuperar datos</h1>
    }

    if(areNoProductsToShow) {
        return <h1>No hay productos para mostrar</h1>
    }

    return(
        <div className="itemListcontainer">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
