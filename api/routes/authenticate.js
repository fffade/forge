/*
    Omar Johnson
    Route /authenticate/
    Created on: 1/20/25

    Verifies an access token against JWT to determine if the user attempt is valid
 */

import prisma from '../client.js';
import { ResponseTypes } from "../responseTypes.js";
import jwt from 'jsonwebtoken';
import { readSecret } from '../readSecret.js';
import base64 from "jsonwebtoken";

export default {

    method: 'POST',
    path: "/authenticate",

    execute: async (req, res) =>
    {
        const username = req.body.username;
        const token = req.body.access_token;

        if(!username || !token) {
            return res.json({type: ResponseTypes.MissingParameter});
        }

        // Decode token data to check for errors
        try {
            console.log(`Verifying with ${readSecret()} against ${token}`);
            const decoded = jwt.verify(token, Buffer.from(readSecret(), 'base64'));

            // Check for a mismatch against the provided username
            if(decoded.username !== username) {
                return res.send({type: ResponseTypes.AuthMismatch});
            }

            const matchingAccount = await prisma.account.findFirst({
                where: {
                    username: username
                }
            });

            if(!matchingAccount) {
                return res.json({type: ResponseTypes.NoUserFound});
            }

            res.json({type: ResponseTypes.AuthSuccess, data: { account: matchingAccount, access_token: token }});
        }
        catch(err) // Problem with the token
        {
            return res.json({type: ResponseTypes.AuthFailed, data: err});
        }
    }
};
