/** @format */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "./reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);
const value = { store, persistor };

export default value;
