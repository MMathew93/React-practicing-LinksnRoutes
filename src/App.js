import React, {useState} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ItemPage from './pages/ItemPage';
import ShoppinCart from './pages/ShoppingCart'

function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" 
          render={() => 
            <Catalog cart={cart} />} />
        <Route exact path="/catalog/:categoryName" 
               render={() => <Catalog cart={cart}/>} />
        <Route path="/product/:id" 
               render={() => 
                <ItemPage 
                  cart={cart} 
                  setCart={setCart} 
                  quantity={quantity} 
                  setQuantity={setQuantity} />} />
        <Route path="/shoppingcart" 
               render={() => 
                <ShoppinCart 
                  cart={cart} 
                  setCart={setCart}
                  setQuantity={setQuantity} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
