import { connect } from 'react-redux';
import Home from '../../home/Home.jsx';
import { homeActions, getProducts } from '../actions/homeActions.js';

const mapStateToProps = (store) => ({
  products: store.products,
  id: store.id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    setProductId: (id) => dispatch(homeActions.setProductId(id)),
  };
};

const HomeContainter = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainter;
