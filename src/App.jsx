import React, { /* useEffect, */ useState } from 'react';

import './styles/reset.scss';
import './styles/responsive.scss';
import './styles/typography.scss';
import { TextField } from './components/TextField';
import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';
import { SizedBox } from './components/SizedBox';
import { Text } from './components/Text';

import { rootReducer, initialState } from './store/modules/index';
import { dispatchHelper } from './helpers/dispatchHelper';
import { Provider } from './store/provider';
import { searchMovies } from './store/modules/movieShows/actions';
import { toaster } from './helpers/toaster';

/**
 * ProjectCard
 * @returns {JSX.Element} ProjectCard
 */
function App() {
  const [state, dispatchBase] = React.useReducer(rootReducer, initialState);
  const { movieShows } = state;

  const dispatch = React.useCallback(dispatchHelper(dispatchBase, state), [dispatchBase]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleMovieSearch = (e) => {
    e.preventDefault();

    if (searchQuery.length < 1) {
      return toaster('Type at least 1 characters to search');
    }

    return dispatch(searchMovies(searchQuery));
  };

  return (
    <Provider state={state} dispatch={dispatch}>
      <div className="col">
        <div className="row row__mainAxis--center">
          <Text size={50}>TV Zone</Text>
        </div>
        <form className="row row__mainAxis--center" onSubmit={handleMovieSearch}>
          <SizedBox width="30%" smWidth="100%">
            <TextField
              color="#F6F9FD"
              required
              type="text"
              placeholder="Type to search movie shows"
              leftIcon="TV"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SizedBox>
          <Button type="submit">Go</Button>
        </form>
        <SizedBox height={20} />
        <div className="row">
          {movieShows.episodes.map((episode) => (
            <MovieCard showName={movieShows.name} episode={episode} key={episode.id} />
          ))}
        </div>
      </div>
    </Provider>
  );
}

export default App;
