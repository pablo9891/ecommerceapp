import { useState, useEffect, createContext } from "react"

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  
  const addItem = (newProduct) => {
      if(!exists(newProduct.id)) {
          setCart([...cart, newProduct]);
          console.log(cart);
          return;
      } 
      const cartUpdated = cart.map(p => {
          if(p.id === newProduct.id) {
              const updatedProduct = {
                  ...p,
                  quantity: newProduct.quantity
              };
              return updatedProduct;
          } else {
              return p;
          }
      });
      setCart(cartUpdated);
      console.log(cart);
      console.log(newProduct);
  };
  
  const exists = (prodId) => {
      return cart.some(p => p.id === prodId);
  };

  const removeProductFromCart = (prodId) => {
      setCart(cart.filter(p => {
            return prodId !== p.id;
        }));
  };

  const getProductQuantity = (id) => {
    const product = cart.find(prod => prod.id === id)
    return product?.quantity
  };

  useEffect(() => {
      setTotalQuantity(getTotalQuantity());
  }, [cart]);

  useEffect(() => {
      setTotal(getTotalPrice());
  }, [cart]);

  const getTotalQuantity = () => {
      let total = 0;
      cart.forEach(p => {
          total += p.quantity;
      });
      return total;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    cart.forEach(p => {
        totalPrice += p.quantity * p.price;
    })
    return totalPrice;
  }

  const clearCart = () => {
      setCart([]);
  }

  return (
        <CartContext.Provider value={{ cart, addItem, removeProductFromCart, getProductQuantity, getTotalQuantity, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};