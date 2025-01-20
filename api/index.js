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
import uuidAPIKey from 'uuid-apikey';
import fs from 'fs';
import cors from 'cors';

// Settings
dotEnvSafe.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());


/* Endpoints */
import User from './routes/user.js';
import Authorization from './routes/authorization.js';
import Authenticate from './routes/authenticate.js';

loadRoutes([ Authorization, Authenticate, User ], app);

console.log(`Loaded API endpoints`);


// Launch server
app.listen(port, async () => {
    console.log(`Back-end listening on port ${port}`);

    // Generate a new secret for token generation and store in a file
    const secret = uuidAPIKey.create().apiKey;

    fs.writeFileSync(process.env.SECRET_PATH, secret);

    console.log(`Generated new token Secret: ${secret}`);
});