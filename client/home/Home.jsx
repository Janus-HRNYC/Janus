import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { makeStyles } from '@material-ui/core/styles';
import ProductList from './ProductList.jsx';
import Products from './Products.jsx';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { products, getProducts, setProductId } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const showProduct = (id) => {
    console.log('Value: ', id);
    setProductId(id);
    setShow(!show);
  };

  const AppBarContainer = () => (
    <AppBar position='fixed'>
      <Toolbar onClick={() => setShow(false)}>
        <StorefrontIcon className={classes.icon} />
        <Typography variant='h6' color='inherit' noWrap>
          Janus Online
        </Typography>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      <Router>
        <CssBaseline />
        <Link to='/'>
          <AppBarContainer />
        </Link>
        <Switch>
          <Route exact path='/'>
            <ProductList
              products={products}
              showProduct={showProduct}
              show={show}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
