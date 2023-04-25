import ratingReducer from '../reducers/ratings';
import fetchRatings from '../services/ratings.service';
import { Ratings } from '../types';

export type SliceState = { 
  rating: Ratings[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | undefined
};

describe('ratingSlice', () => {
  it('should handle fetchRatings.pending', () => {
    const stateBefore = {
        rating: [],
        loading: 'idle',
        error: "",
      } as SliceState;      

      const stateAfter = ratingReducer(stateBefore, fetchRatings.pending(''));
    
    expect(stateAfter).toEqual({
      rating: [],
      loading: 'pending',
      error: "",
    });
  });

  it('should handle fetchRatings.fulfilled', () => {
    const stateBefore = {
      rating: [],
      loading: 'pending',
      error: "",
    } as SliceState;

    const payload = [{
      attributes: {
          rating: '5',
          description: 'Testing description',
          restaurant_id: 1,
          user_id: 1,
      },
      id: 0
  }];

  const requestId = '123';

  const stateAfter = ratingReducer(
    stateBefore,
    fetchRatings.fulfilled(payload, requestId)
  );
  
    expect(stateAfter).toEqual({
      rating: [{
        attributes: {
            rating: '5',
            description: 'Testing description',
            restaurant_id: 1,
            user_id: 1,
        },
        id: 0
    }],
      loading: 'succeeded',
      error: "",
    });
  });  
});