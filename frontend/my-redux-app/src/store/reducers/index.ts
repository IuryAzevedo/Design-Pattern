// src/store/index.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import userReducer from './reducers/userReducer';
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
