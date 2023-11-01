import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage as the default storage

const persistConfig = {
  key: "root",
  storage,
  // Optionally, specify which reducers you want to persist; leaving this out will persist all reducers
  // whitelist: ['book']
};

const rootReducer = combineReducers({ book: bookReducer });
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: reduxPersistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
