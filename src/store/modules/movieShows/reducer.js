import types from './types';

export const movieShowsInitialState = {
  name: '',
  episodes: [],
};

export const moviesReducer = (state = movieShowsInitialState, action) => {
  switch (action.type) {
    case types.SET_MOVIES:
      return {
        ...action.payload.movieShows,
      };

    case types.REMOVE_MOVIES:
      return {
        ...movieShowsInitialState,
      };

    default:
      return state;
  }
};
