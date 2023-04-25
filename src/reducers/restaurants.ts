import { createSlice } from '@reduxjs/toolkit';
import fetchRestaurants from '../services/restaurants.service';
import { Restaurant } from '../types';

type SliceState = { 
    restaurants: Restaurant[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | undefined
};

const initialState = {
    restaurants: [],
    loading: 'idle',
    error: ""
} as SliceState;

const restaurantSlice = createSlice({
    name: 'resturants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.pending, (state) => {
            state.loading = 'pending'
        });

        builder.addCase(fetchRestaurants.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;            
        });

        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.restaurants = action.payload;
        })
    }
})

export default restaurantSlice.reducer;