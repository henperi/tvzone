import types from './types';
import httpService from '../../../services/httpService';
import { axiosErrorHandler } from '../../../helpers/axiosErrorHandler';

/**
 * @description method to set the auth user
 * @param {object} movieShows
 * @returns {object} reducer action type and payload
 */
export const setMovieShows = (movieShows) => ({
  type: types.SET_MOVIES,
  payload: {
    movieShows,
  },
});


/**
 * @description A thunk action to fetch the authenticated user's profile
 * @param {string} movieName
 * @returns {Function} dispatch an action
 */
export const searchMovies = (movieName) => async (dispatch) => {
  try {
    const result = await httpService.get(`?q=${movieName}&embed=episodes`);

    // console.log(result.data);

    const { _embedded, name } = result.data;

    return dispatch(setMovieShows({ name, episodes: _embedded.episodes }));
  } catch (error) {
    // console.log(error);

    return axiosErrorHandler(error, dispatch);
  }
};
