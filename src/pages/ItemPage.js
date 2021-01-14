import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import products from '../data/products';
import QuanityUpdater from '../components/QuanityUpdater';
import '../css/ItemPage.css';

//Main page component
function ItemPage({cart, setCart, quantity, setQuantity}) {
  return (
    <div className="itemPage">
      <Navbar cart={cart} />
      <ProductContent 
        cart={cart} 
        setCart={setCart} 
        quantity={quantity} 
        setQuantity={setQuantity} />
    </div>
  );
}

//Product display
function ProductContent({cart, setCart, quantity, setQuantity}) {
  const { id } = useParams();
  const [isSelected, setSelected] = useState(false);
  const [size, setSize] = useState(null);

  //hightlights the selected size and updates state with currently selected size
  function updateSelected(e, value) {
    setSelected(value)
    updateSize(e)
  }
  //sets size state to the currently selected product size
  function updateSize(e) {
    setSize(e.currentTarget.textContent.trim());
  }
  //Adds product to cart state, if it exists we update qty change, if it does not exist we add the product to the cart. We also create new items in cart if there is a size difference
  function updateCart(id, newQty, size) {
    //check if the item is in the cart, update the qty
    if(cart.some(item=> item.id === id) && cart.some(item=> item.size === size)){
      const updatedItems = cart.map(item => {
        if(item.id === id && item.size === size) {
          return {...item, qty: newQty + item.qty}
        }
        return item;
      });
      setCart(updatedItems);
      setQuantity(1);
    }else {
    //if not in the cart, add it into the cart
      setCart([...cart, 
        {
          id: id,
          name: products[id].name,
          price: products[id].price,
          size: size,
          qty: newQty,
          image: products[id].image
        }
      ])
      setQuantity(1);
    }
  }

  return (
    <Grid 
      container
      direction="row"
      justify="center"
      alignItems="center">
      <Grid item xs></Grid>
      <Grid item xs>
        <div className="productDisplay" style={{display: "flex", justifyContent: "center", margin: "50px"}}>
          <div className="productImage">
            <img src={products[id].image} alt={products[id].name} />
          </div>
          <div className="productDetails">
            <div className="productTitle">
              <h1> {products[id].name} </h1>
            </div>
            <div className="productsSubDetails" style={{display: "flex", width: "250px", justifyContent: "space-between"}}>
              <div className="productPrice">
                <h3> ${products[id].price} </h3>
              </div>
              <div className="productCategory">
                <h3> {products[id].category} </h3>
              </div>
            </div>
            <div className="productSize">
              {products[id].sizes.map((size, i) => {
              const backgroundColor = isSelected === i ? '#303f9f' : 'white';
              const color = isSelected === i ? 'white' : 'black';
              return(
                <label className="sizes"
                       key={size} 
                       style={{ backgroundColor, color }} 
                       onClick={(e) => updateSelected(e, i)}>
                  <h3 style={{margin: "5px"}}> {size} </h3>
                </label>)
                }
              )}
            </div>
            <QuanityUpdater quantity={quantity} setQuantity={setQuantity} />
            <div className="buttonWrap" style={{ display: "flex", flexDirection: "column", marginTop: "15px"}}>
              <Button variant="contained" 
                      color="primary" 
                      disabled={size === null}
                      onClick={() => updateCart(products[id].id, quantity, size)}>
                Add to cart
              </Button>
              <Link to="/shoppingcart">
                <Button variant="contained" color="primary">
                  Check Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  )
}

export default ItemPage;
