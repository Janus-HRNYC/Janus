import {
  setProductId,
  getStyles,
  getSelected,
  getInfo,
} from "./actionsTypes.js";
import axios from "axios";

export const setOverviewData = {
  setProductId: (id) => ({
    type: setProductId,
    results: id,
  }),
  getStyles: (id) => ({
    type: getStyles,
    results: id,
  }),
  getSelected: (id) => ({
    type: getSelected,
    results: id,
  }),
  getInfo: (id) => ({
    type: getInfo,
    results: {
      payload: id,
    },
  }),
};

export const getStyleData = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://18.224.200.47/products/${id}/styles`)
      .then((result) => {
        return Promise.all([
          dispatch(setOverviewData.setProductId(result.data.product_id)),
          dispatch(setOverviewData.getStyles(result.data.results)),
          // dispatch(setOverviewData.getSelected(result.data.results[0])),
        ]);
      })
      .catch((err) => console.error(err));
  };
};

export const getSelectedData = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://18.224.200.47/products/${id}/styles`)
      .then((result) => {
        return Promise.all([
          dispatch(setOverviewData.getSelected(result.data.results[0])),
        ]);
      })
      .catch((err) => console.error(err));
  };
};

export const getSelectedStyleID = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://18.224.200.47/products/${id}/styles`)
      .then((result) => {
        return Promise.all([dispatch(setOverviewData.setProductId(id))]);
      })
      .catch((err) => console.error(err));
  };
};

export const getProductInfo = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://18.224.200.47/products/${id}`)
      .then((result) => {
        dispatch(setOverviewData.getInfo(result.data));
        dispatch(setOverviewData.setProductId(id));
      })
      .catch((err) => console.error(err));
  };
};
