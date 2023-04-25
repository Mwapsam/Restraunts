import restaurantReducer from '../reducers/restaurants';
import fetchRestaurants from '../services/restaurants.service';
import { Restaurant } from '../types';

type SliceState = { 
    restaurants: Restaurant[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | undefined
};

describe('restaurantSlice', () => {
  it('should handle fetchRestaurants.pending', () => {
    const stateBefore = {
      restaurants: [],
      loading: 'idle',
      error: "",
    } as SliceState;

    const stateAfter = restaurantReducer(stateBefore, fetchRestaurants.pending(''));

    expect(stateAfter).toEqual({
      restaurants: [],
      loading: 'pending',
      error: "",
    });
  });

  it('should handle fetchRatings.fulfilled', () => {
    const stateBefore = {
        restaurants: [],
        loading: 'idle',
        error: "",
    } as SliceState;

    const payload = [{
      attributes: {
          name: 'Ulendo eats',
          address: 'Testing address',
          image: 'Testing image',
      },
      id: 0
  }];

  const requestId = '124';

  const stateAfter = restaurantReducer(
    stateBefore,
    fetchRestaurants.fulfilled(payload, requestId)
  );
  
    expect(stateAfter).toEqual({
        restaurants: [{
            attributes: {
                name: 'Ulendo eats',
                address: 'Testing address',
                image: 'Testing image',
            },
            id: 0
        }],
      loading: 'succeeded',
      error: "",
    });
  });  
});
