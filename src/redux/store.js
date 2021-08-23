  
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { persistStore } from 'redux-persist';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistStore };