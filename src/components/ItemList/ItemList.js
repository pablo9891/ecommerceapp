import Item from '../Item/Item';

const ItemList = ({products}) => {
    return(products.map(p => <Item product={p} />));
};

export default ItemList;