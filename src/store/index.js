import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage机制

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const storageConfig = {
  key: 'root', // 必须有的
  storage: storage, // 缓存机制
  whitelist: ['orderMovieInfo', 'orderMovieList']
}
const myPersistReducer = persistReducer(storageConfig, reducer);
const store = createStore(myPersistReducer, composeEnhancers(
  applyMiddleware(thunk)
));
export const persistor = persistStore(store);
export default store;