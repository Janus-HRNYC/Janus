import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/relatedProductsActions.js';

const DispayRelatedItems = (props) => {
  return (
    <div>
      <button onClick={props.onGetRelated}>TEST_Display_Related_Items_ID_2</button>
      {!props.data ? '' : props.data.map((products) => {
        return <ul>{products.name} </ul>
      })}      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.relatedProductsReducer.data
  }
};

const mapDispatcchToProps = (dispatch) => {
  return {
    onGetRelated: () => dispatch(actionCreator.fetchRelatedProducts()),
  }

}

export default connect(mapStateToProps, mapDispatcchToProps)(DispayRelatedItems)