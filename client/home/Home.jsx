import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Products from './Products.jsx';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    return axios
      .get('http://18.224.200.47/products/list?count=100')
      .then((results) => {
        console.log('Results', results);
        setProducts(results.data);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
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
                  <li key={item.id} onClick={handleClick}>
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
