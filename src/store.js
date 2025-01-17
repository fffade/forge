/*
    Omar Johnson
    Redux Store
    Created on: 1/15/25
 */

import { configureStore } from '@reduxjs/toolkit';
import accountHamburgerReducer from './components/accountHamburgerSlice';
import sessionReducer from './components/sessionSlice'

// Configure our store with the necessary reducers
export const store = configureStore({
    reducer: {
        accountHamburger: accountHamburgerReducer,
        session: sessionReducer
    }
});