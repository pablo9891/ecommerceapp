import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
import CartForm from './components/CartForm/CartForm';
import { CartContextProvider } from './context/CartContext/CartContext'
import { NotificationProvider } from './context/NotificationContext/NotificationContext';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/form' element={<CartForm />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
