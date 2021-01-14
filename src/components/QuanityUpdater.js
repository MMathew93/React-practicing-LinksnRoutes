
import React from 'react';
import Button from '@material-ui/core/Button';

function QuanityUpdater({quantity, setQuantity}) {
  //Updates state for product quantity, ensures only numbers are input
  function updateQuantity(e) {
    setQuantity(e.target.value.replace(/\D/,''))
  }

  //Increments quantity state by one
  function increment() {
    setQuantity(+quantity + 1)
  }

  //Decrements quantity state by one
  function decrement() {
    setQuantity(+quantity - 1)
  }
    return (
        <div className="quanityUpdater">
            <Button 
                variant="contained" 
                color="primary" 
                onClick={decrement} 
                disabled = {quantity <= 1}>
                -
            </Button>
            <input 
                type="text" 
                value={quantity} 
                style={{width: "50px",textAlign: "center",border: "none",fontSize: "1.25rem"}}
                onChange={e => updateQuantity(e)} />
            <Button variant="contained" color="primary" onClick={increment}>
                +
            </Button>
        </div>
  );
}

export default QuanityUpdater;
