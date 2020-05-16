import {
  setProductId,
  setStyles,
  setSelected,
  setInfo,
} from "./actionsTypes.js";
import axios from "axios";

export const setOverviewData = {
  setProductId: (id) => ({
    type: setProductId,
    results: id,
  }),
  setStyles: (id) => ({
    type: setStyles,
    results: id,
  }),
  setSelected: (id) => ({
    type: setSelected,
    results: id,
  }),
  setInfo: (id) => ({
    type: setInfo,
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
          dispatch(setOverviewData.setStyles(result.data.results)),
          dispatch(setOverviewData.setSelected(result.data.results[0])),
        ]);
      })
      .catch((err) => console.error(err));
  };
};

export const getProductInfo = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://18.224.200.47/products/${id}`)
      .then((result) => {
        dispatch(setOverviewData.setInfo(result.data));
      })
      .catch((err) => console.error(err));
  };
};
