import { createSlice } from '@reduxjs/toolkit';
import fetchRatings from '../services/ratings.service';
import { Ratings } from '../types';

type SliceState = { 
    rating: Ratings[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | undefined
};

const initialState = {
    rating: [],
    loading: 'idle',
    error: ""
} as SliceState;

const ratingSlice = createSlice({
    name: 'ratings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRatings.pending, (state) => {
            state.loading = 'pending';
        });

        builder.addCase(fetchRatings.rejected, (state) => {
            state.loading = 'failed';
        });

        builder.addCase(fetchRatings.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.rating = action.payload;
        })
    }
})

export default ratingSlice.reducer;