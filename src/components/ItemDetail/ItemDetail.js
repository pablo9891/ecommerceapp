import './itemDetail.css';

const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    return(
        <div className="item-container">
        <div className="cart-image-container"><img src={img} alt="Producto"></img></div>
        <div className="cart-product-header"><h2>{name}</h2></div>
        <div className="cart-product-detail"><h3>{description}</h3></div>
        <div className="cart-price"><h3>Stock: {stock}</h3></div>
        <div className="cart-price"><h3>{price}$</h3></div>
        <button className="cart-button">Add to cart</button>
    </div>
    );
};

export default ItemDetail;