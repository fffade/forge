/*
    Omar Johnson
    Account Hamburger State Management
    Created on: 1/15/25
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false
};

export const accountHamburgerSlice = createSlice({
   name: 'accountHamburger',
   initialState,
    // Reducers manage actions on the account hamburger
   reducers: {
       toggle: (state) => {
           state.isOpen = !state.isOpen;
       },
       close: (state) => {
           state.isOpen = false;
       }
   }
});

// Create actions from reducers
export const { toggle, close } = accountHamburgerSlice.actions;

export default accountHamburgerSlice.reducer; // Export reducer