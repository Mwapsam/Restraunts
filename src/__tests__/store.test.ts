import {  store, RootState, AppDispatch } from '../store/store';
import restaurantSlice from '../reducers/restaurants';
import ratingSlice from '../reducers/ratings';
import userSlice from '../reducers/users';

describe('store', () => {
    test('should be properly configured', () => {
      const state = store.getState();
      expect(state).toEqual({
        restuarants: restaurantSlice(undefined, { type: 'init' }),
        ratings: ratingSlice(undefined, { type: 'init' }),
        users: userSlice(undefined, { type: 'init' }),
      });
    });
  
    test('should export valid types', () => {
      const dispatch: AppDispatch = store.dispatch;
      const state: RootState = store.getState();
      expect(dispatch).toBeDefined();
      expect(state).toBeDefined();
    });
  });