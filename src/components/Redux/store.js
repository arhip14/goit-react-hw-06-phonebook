import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import contactsReducer from "./reducers/contactsReducer";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: 'root',
  storage,
};

const persistReducer = persistReducer(persistConfig, contactsReducer);


export const store = configureStore({
  reducer: {
    contacts: persistReducer,
  },
});

export const persistor = persistStore(store);