import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer, RootState } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedRootReducer = persistReducer<RootState, any>(
  persistConfig,
  rootReducer,
);

const logger = createLogger({ level: 'log' });

const middlewares = [sagaMiddleware, logger];

const store = createStore(
  persistedRootReducer,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor, store };
