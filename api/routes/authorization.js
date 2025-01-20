/*
    Omar Johnson
    Route /authorization/
    Created on: 1/19/25

    Returns the account information if username and password passes
    If auth attempt fails, returns fail error
 */

import prisma from '../client.js';
import { ResponseTypes } from "../responseTypes.js";
import jwt from 'jsonwebtoken';
import uuidAPIKey from 'uuid-apikey';
import { readSecret } from "../readSecret.js";

export default {

    method: 'POST',
    path: "/authorization",

    execute: async (req, res) =>
    {
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password) {
            return res.json({type: ResponseTypes.MissingParameter});
        }

        const matchingAccount = await prisma.account.findFirst({
            where: {
                username: username,
                password: password
            }
        });

        if(!matchingAccount) {
            return res.json({type: ResponseTypes.AuthFailed});
        }

        // Create a new access token to return to the client
        // Expires in 1 hour
        const token = jwt.sign({username: username}, Buffer.from(readSecret(), 'base64'), { expiresIn: '1h' });

        console.log(`Generated new access token: ${token}`);

        res.json({type: ResponseTypes.AuthSuccess, data: { account: matchingAccount, access_token: token }});
    }
};
