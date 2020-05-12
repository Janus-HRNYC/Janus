import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/testAction'
const Placeholder = (props) => {

return (
  <div>
    <p>{props.load ? 'loading' : props.test[0].name}</p>
    <button onClick={props.onTestHandler}>Test API</button>
  </div>
)
};
const mapStateToProps = state => {
  return {
    test: state.tr.test,
    load: state.tr.load
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTestHandler: () => dispatch(actionCreators.testFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Placeholder)