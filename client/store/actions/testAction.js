import * as actionTypes from './action'

export const testRandom = (data) => {
  return {
    type: actionTypes.TEST_RANDOM,
    payload: {
      data: data
    }
  }
}

   export const testFetch = () => {
    return dispatch => {
      // axios.get(//endpoint) {
        // promise ? dispatch(testRandom(results.data))
      // }
    }
  }
