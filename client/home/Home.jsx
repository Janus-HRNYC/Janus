import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './Products.jsx';

const Home = (props) => {
  const { products, productId, getProducts, setProductId } = props;
  // const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = (id) => {
    console.log('Value: ', id);
    setProductId(id);
    setShow(!show);
  };

  return (
    <>
      <Router>
        {!show ? (
          <div>
            <ul>
              {products.map((item) => {
                let loc = '/products/' + item.id;
                return (
                  <li key={item.id} onClick={() => handleClick(item.id)}>
                    <Link to={loc}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        <Switch>
          <Route exact path='/products/:id' component={Products}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
