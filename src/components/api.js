/*
    Omar Johnson
    API
    Created on: 1/22/25

    This module allows us to interact with our back-end with cohesion
 */

import fetch from 'node-fetch';

// Returns a specific user's habits
export const getHabits = async (accountId) =>
{
    const response = await fetch(`http://localhost:4000/habits/${accountId}`, { method: 'GET' }).catch((err) => {
        alert("Error connecting to back-end, please report the following information to support: " + err);
        throw err;
    });

    const json = await response.json();

    // console.log(json);

    return json.data;
};

// Add a new user habit
export const createHabit = async (accountId, props) =>
{
    props.account_id = accountId;

    const response = await fetch(`http://localhost:4000/habit/add`, { method: 'POST', body: props}).catch((err) => {
        alert("Error connecting to back-end, please report the following information to support: " + err);
        throw err;
    });

    const json = await response.json();

    console.log(json);

    return json.data;
}