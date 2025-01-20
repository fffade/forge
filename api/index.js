/*
    Omar Johnson
    API index.js
    Created on: 1/17/25

    This is the entry point for Forge's back-end API and server structure
    The API handles requests for authentication, user data, and more
 */

/* Imports */
import express from 'express';
import prisma from './client.js';
import dotEnvSafe from 'dotenv-safe';
import { loadRoutes } from './router.js';
import bodyParser from 'body-parser';

// Settings
dotEnvSafe.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());


/* Endpoints */
import User from './routes/user.js';
import Authenticate from './routes/authenticate.js';

loadRoutes([ Authenticate, User ], app);

console.log(`Loaded API endpoints`);


// Launch server
app.listen(port, async () => {
    console.log(`Back-end listening on port ${port}`);


});