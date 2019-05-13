import { combineReducers } from 'redux'

import movies from './movies/movies.reducers'
import filters from './filters/filters.reducers'


const reducers = combineReducers({
  filters,
  movies
});

export default reducers;
