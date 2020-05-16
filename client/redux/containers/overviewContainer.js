import { connect } from "react-redux";
import { getStyleData, getProductInfo } from "../actions/overviewActions";
import Overview from "../../overview/index";

const mapStateToProps = (store) => ({
  id: store.productIdReducer,
  styles: store.styles,
  selected: store.selected,
  info: store.info,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setStyles: (id) => dispatch(getStyleData(id)),
    setInfo: (id) => dispatch(getProductInfo(id)),
  };
};

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverviewContainer;
