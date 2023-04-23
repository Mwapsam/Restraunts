import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../reducers/restaurants';

export const store = configureStore({
  reducer: {
    restuarants: restaurantReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch