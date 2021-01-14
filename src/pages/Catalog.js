import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import {Switch, Route, Link, useParams} from 'react-router-dom';
import products from '../data/products';
import categories from '../data/categories';
import '../css/Catalog.css';

//Main page component
function Catalog({cart}) {
  return (
    <div className="catalog">
      <Navbar cart={cart} />
      <MainDisplay />
    </div>
  );
}

//Main display for the side navigation for categories, and products in each category
function MainDisplay() {
  const [productsByCategory, setProductsByCategory] = useState([...products]);
  const { categoryName } = useParams();

  useEffect(() => {
    if(categoryName) {
      setProductsByCategory(products.filter((product) => product.category === categoryName))
    }
  }, [categoryName])

  return (
    <div className="mainlayout" style={{display: "flex"}}>
      <SideNavigation />
      <ProductsDisplay productsByCategory={productsByCategory} />
    </div>
  )
}

//side navigation for the categories for items
function SideNavigation() {
  
  return (
    <div className="sideNavigation">
      <ul>
      <Link to={'/catalog'}>
        <li>All</li>
      </Link>
        {categories.map(category =>
        <Link key={category.name} to={`/catalog/${category.name}`}>
          <li>{category.name}</li>
        </Link>)}
      </ul>
      <Switch>
        <Route path={'/catlog/:categoryName'} />
      </Switch>
    </div>
  )
}

//Display the items/Photos/links to item pages
function ProductsDisplay({productsByCategory}) {
  return (
    <div className="productWrapper">
      <Grid container spacing={5} wrap="wrap">
        <Switch>
          <Route exact path="/catalog">
            {products.map((product) =>
              <Grid item xs={4} key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <div className="product">
                    <img src={product.image} 
                        alt={product.name} 
                        onMouseOver={e => e.currentTarget.src = product.imageHover}
                        onMouseOut={e => e.currentTarget.src = product.image} />
                    <div>
                      <span>
                        {product.name}
                      </span>
                      <span>
                        {product.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </Grid>
            )}
          </Route>
          <Route exact path="/catalog/:categoryName">
          {productsByCategory.map((product) =>
            <Grid item xs key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className="product">
                <img src={product.image} 
                      alt={product.name} 
                      onMouseOver={e => e.currentTarget.src = product.imageHover}
                      onMouseOut={e => e.currentTarget.src = product.image} />
                  <div>
                    <span>
                      {product.name}
                    </span>
                    <span>
                      {product.price}
                    </span>
                  </div>
                </div>
              </Link>
            </Grid>
            )}
          </Route>
        </Switch>
      </Grid>
    </div>
  )
}

export default Catalog;
