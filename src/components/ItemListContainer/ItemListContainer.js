import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [areNoProductsToShow, setAreNoProductsToShow] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
                ? query(collection(db, 'products'), where('category.id', '==', Number(categoryId)))
                : collection(db, 'products');
  
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            });

            setProducts(productsAdapted);
        })
        .catch(error => {
            setError(true);
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        })
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
