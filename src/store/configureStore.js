import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import partakersReducer from '../reducers/partakers'
import lastPartakerReducer from '../reducers/lastPartaker';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      lastPartaker: lastPartakerReducer,
      partakers: partakersReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};