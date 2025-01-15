/*
    Omar Johnson
    Authentication Session Management
    Created on: 1/15/25
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        authenticate: {

        }
    }
});

// Create actions from reducers
export const { authenticate } = sessionSlice.actions;

export default sessionSlice.reducer; // Export reducer