import React from 'react';
import Navbar from '../components/Navbar';
//import QuanityUpdater from '../components/QuanityUpdater';
import CartFooter from '../components/CartFooter';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../css/ShoppingCart.css';

function ShoppingCart({cart, setCart}) {

  function decrementItem(id, qty, size) {
      const updatedItems = cart.map(item => {
        if(item.id === id && item.size === size) {
          return {...item, qty: qty - 1}
        }
        return item;
      })
      setCart(updatedItems);
  }

  function incrementItem(id, qty, size) {
      const updatedItems = cart.map(item => {
        if(item.id === id && item.size === size) {
          return {...item, qty: qty + 1}
        }
        return item;
      });
      setCart(updatedItems);
  }

  function removeItem(id, size) {
    setCart(cart.filter((item)=> item.id !== id && item.size !== size));
  }

  return (
    <div className="shoppingCart">
      <Navbar cart={cart} />
      <div className="cartWrapper">
        {cart.length === 0 &&
          <div className="emptyCart">
            <h1> YOUR CART IS EMPTY </h1>
            <h2> Go shopping and add some stuff into it!</h2>
          </div>
        }
        <Grid container spacing={5} wrap="wrap">
          {cart.map((item, i)=>
            <Grid item xs={4} key={i}>
              <div className="cartItem">
                <img src={item.image} alt={item.name} />
                <div>
                  <div style={{fontSize: "22px"}}>
                    <span>{item.name}</span>
                  </div>
                  <div className="cartItemDetails">
                    <span>${item.price}</span>
                    <span>Size:{item.size}</span>
                  </div>
                  <div className="checkOutUpdate">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => decrementItem(item.id, item.qty, item.size)} 
                        disabled = {item.qty <= 1}>
                        -
                    </Button>
                    <input 
                        type="text" 
                        value={item.qty} 
                        style={{width: "50px",textAlign: "center",border: "none",fontSize: "1.25rem"}} 
                        readOnly />
                    <Button variant="contained" color="primary" onClick={() => incrementItem(item.id, item.qty, item.size)}>
                        +
                    </Button>
                  </div>
                </div>
                <Button onClick={() => removeItem(item.id, item.size)}>
                  Delete
                </Button>
              </div>
            </Grid>
            )}
        </Grid>
      </div>
      <CartFooter cart={cart} />
    </div>
  );
}

export default ShoppingCart;
