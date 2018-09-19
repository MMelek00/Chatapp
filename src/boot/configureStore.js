import {
  compose,
  createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import combineReducers from "../reducers/index";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

import { createLogger } from "redux-logger";

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
    compose(applyMiddleware(
      thunk,
      createLogger(),
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
