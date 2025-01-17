/*
    Omar Johnson
    API index.js
    Created on: 1/17/25

    This is the entry point for Forge's back-end API and server structure
    The API handles requests for authentication, user data, and more
 */

/* Imports */
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const dotenv = require('dotenv');
const dotenvSafe = require('dotenv-safe');

// Settings
const app = express();
const port = 3000;

/* Endpoints */
app.get('/', (req, res) => {
    res.send({account_id: 2, username: "fffade"});
})

// Launch server
app.listen(port, () => {
    console.log(`Back-end listening on port ${port}`);

    /* ALWAYS GENERATE AND STORE A NEW API SECRET ON LAUNCH */
})