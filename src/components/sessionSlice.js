/*
    Omar Johnson
    Authentication Session Management
    Created on: 1/15/25
 */

import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';
import fetch from 'node-fetch';

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

// Authorize using username and password against API to retrieve an access token
export const authorizeCredentials = async (username, password) =>
{
    // TODO: Full validation and security checks against credentials
    // e.g. protect against injection-based attacks
    const body = { username, password };

    const response = await fetch('http://localhost:4000/authorization', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    });

    const data = await response.json();

    // Only auth OKAY returns a token
    if(data.code === 200) {
        console.log(`Access token retrieved: ${data.data.access_token}`);
        Cookies.set('access_token', data.data.access_token);
        return true;
    }

    return false;


};

// Fetch the access token and check if it's still valid (not expired)
export const checkAuth = () => {
  return Cookies.get('access_token');
};

// Redirects the user if no authentication is found or authentication token is invalid
export const requireAuthRedirect = () => {

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
    document.cookie = 'access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

// Create actions from reducers
export const { authenticate } = sessionSlice.actions;

export default sessionSlice.reducer; // Export reducer