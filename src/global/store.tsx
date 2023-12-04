import {
  REGISTER,
  PURGE,
  REHYDRATE,
  FLUSH,
  PERSIST,
  PAUSE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./globalState";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PERSIST, REHYDRATE, PURGE, PAUSE, REGISTER],
      },
    }),
});
