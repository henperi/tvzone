
import { moviesReducer, movieShowsInitialState } from './movieShows/reducer';

export const initialState = {
  movieShows: movieShowsInitialState,
};

export const rootReducer = (state, action) => {
  const { movieShows } = state;

  return {
    movieShows: moviesReducer(movieShows, action),
  };
};
