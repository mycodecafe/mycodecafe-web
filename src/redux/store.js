import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use local storage as the default storage engine
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/rootReducers';

// Configuration for Redux Persist
const persistConfig = {
  key: 'root', // key for the root of the storage
  storage, // storage engine to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer, // Use the persisted reducer
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store); // Create a persistor object

export { store, persistor }; // Export both store and persistor
