import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import partakersReducer from '../reducers/partakers';
import housesFacilitatorsReducer from '../reducers/housesFacilitators';
import housesEntriesReducer from '../reducers/housesEntries';
import lastPartakerReducer from '../reducers/lastPartaker';
import financesFiltersReducer from '../reducers/financesFilters';
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users';
import userFiltersReducer from '../reducers/userFilters';
import hostFacilitatorFiltersReducer from '../reducers/hostFacilitatorFilters';
import partakersFilters from '../reducers/partakersFilters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      lastPartaker: lastPartakerReducer,
      partakers: partakersReducer,
      housesFacilitators: housesFacilitatorsReducer,
      housesEntries: housesEntriesReducer,
      financesFilters: financesFiltersReducer,
      auth: authReducer,
      users: usersReducer,
      userFilters: userFiltersReducer,
      hostFacilitatorFilters: hostFacilitatorFiltersReducer,
      partakersFilters: partakersFilters
    }),
    composeEnhancers(applyMiddleware(thunk)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};