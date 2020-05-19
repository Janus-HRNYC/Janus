import {
  getSelected_id,
  getStyles,
  getSelected,
  getInfo,
} from "./actionsTypes.js";
import axios from "axios";

export const setOverviewData = {
  // getSelected_id: (id) => ({
  //   type: getSelected_id,
  //   results: id,
  // }),
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

// export const getSelectedStyleID = (id) => {
//   return (dispatch) => {
//     return axios
//       .get(`http://18.224.200.47/products/${id}/styles`)
//       .then((result) => {
//         return Promise.all([
//           dispatch(setOverviewData.setProductId(result.data.style_id)),
//         ]);
//       })
//       .catch((err) => console.error(err));
//   };
// };

export const getStyleData = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://18.224.200.47/products/${id}/styles`)
      .then((result) => {
        console.log(result.data.results);
        return Promise.all([
          // dispatch(setOverviewData.setProductId(result.data.product_id)),
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
        for (let i = 0; i < result.data.results.length; i++) {
          if (result.data.results[i]["default?"] === 1) {
            const payload = result.data.results[i].style_id;
            return dispatch(setOverviewData.getSelected(payload));
          }
        }
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
      })
      .catch((err) => console.error(err));
  };
};
