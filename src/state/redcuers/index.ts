import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// for useSeletor state anntotation
export type RootState = ReturnType<typeof reducers>;

// take this function give us back whatever types are
