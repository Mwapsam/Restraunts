import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../reducers/restaurants';
import ratingSlice from '../reducers/ratings';
import userSlice from '../reducers/users';

export const store = configureStore({
  reducer: {
    restuarants: restaurantReducer,
    ratings: ratingSlice,
    users: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch