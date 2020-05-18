import { connect } from "react-redux";
import {
  getStyleData,
  getProductInfo,
  getSelectedData,
  // getSelectedStyleID,
} from "../actions/overviewActions";
import Overview from "../../overview/index";

const mapStateToProps = (store) => ({
  // id: store.selected_id,
  styles: store.styles,
  selected: store.selected_id,
  info: store.info,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getStyles: (id) => dispatch(getStyleData(id)),
    getInfo: (id) => dispatch(getProductInfo(id)),
    getSelected: (id) => dispatch(getSelectedData(id)),
    // getProduct_ID: (id) => dispatch(getSelectedStyleID(id)),
  };
};

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverviewContainer;