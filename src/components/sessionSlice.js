/*
    Omar Johnson
    Authentication Session Management
    Created on: 1/15/25
 */

import Cookies from 'js-cookie';
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

// Fetch the access token and check if it's still valid (not expired)
export const checkAuth = () => {
  return Cookies.get('access_token');
};

// Redirects the user if no authentication is found or authentication token is invalid
export const requireAuthRedirect = (history) => {

    console.log("This page requires authentication...");
    console.log("Validating access token: " + Cookies.get('access_token'));

    const isAuth = checkAuth();

    // Redirects to login page
    if(!isAuth) {
        console.log("User not authenticated");
        window.location.href = '/login';
    }
};

// Deletes the current access token, thus logging out the user
export const deleteAuth = () => {
    Cookies.delete('access_token');
};

// Create actions from reducers
export const { authenticate } = sessionSlice.actions;

export default sessionSlice.reducer; // Export reducer