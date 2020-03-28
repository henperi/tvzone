/* eslint-disable no-console */
/* eslint-disable import/no-cycle */

/**
 * This helper method attempts to handle axios error messages
 *
 * @param {*} error
 * @param {function} dispatch
 * @returns {*} any
 */
// eslint-disable-next-line no-unused-vars
export const axiosErrorHandler = (error, dispatch) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js

    if (!navigator.onLine) {
      // dispatch(setNetworkError(true));
    }
  } else {
    // Something happened in setting up the request that triggered an Error
  }
};
