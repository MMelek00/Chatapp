import {
  createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

import combineReducers from "../reducers/index";


const config = {
  key: "root",
  storage,
  blacklist: ["status"],
};

const reducers = persistCombineReducers(config, combineReducers);

const configureStore = (state) => {
  const store = createStore(
    reducers,
    state,
    composeWithDevTools(applyMiddleware(
      thunk,
    )),
  );

  const persistor = persistStore(
    store,
    null,
    () => { store.getState(); },
  );

  return { store, persistor };
};

export default configureStore;
