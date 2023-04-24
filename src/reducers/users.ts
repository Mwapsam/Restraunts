import { createSlice } from '@reduxjs/toolkit';
import fetchUsers from '../services/users.service';
import { Users } from '../types';

type SliceState = { 
    users: Users[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | undefined
};

const initialState = {
    users: [],
    loading: 'idle',
    error: ""
} as SliceState;

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = 'pending';
        });

        builder.addCase(fetchUsers.rejected, (state) => {
            state.loading = 'failed';
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.users = action.payload;
        });
    }    
})

export default userSlice.reducer;
