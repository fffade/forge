/*
    Omar Johnson
    Route /authenticate/
    Created on: 1/19/25

    Returns the account information if authentication passes
    If auth attempt fails, returns fail error
 */

import prisma from '../client.js';
import { ResponseTypes } from "../responseTypes.js";

export default {

    method: 'POST',
    path: "/authenticate",

    execute: async (req, res) =>
    {
        const username = req.body.username;
        const password = req.body.password;

        if(!username || !password) {
            return res.send({type: ResponseTypes.MissingParameter});
        }

        const matchingAccount = await prisma.account.findFirst({
            where: {
                username: username,
                password: password
            }
        });

        if(!matchingAccount) {
            return res.send({type: ResponseTypes.AuthFailed});
        }

        res.send({type: ResponseTypes.AuthSuccess, data: matchingAccount});
    }
};
