
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css'

function Navbar({cart}) {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
      <div className="navbar">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="brandHome">
              <Link to="/">
                B 2 B
              </Link>
            </Typography>
          <Link to="/shoppingcart">
            <Button className="cartButton" color="inherit">
              {cartIcon}{[...cart].reduce(function(a, b) {
                return a + b.qty
              }, 0)}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
