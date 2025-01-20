/*
    Omar Johnson
    Route /user/
    Created on: 1/19/25

    Returns the full account data of a specific user by ID
 */

import prisma from '../client.js';
import { ResponseTypes } from "../responseTypes.js";

export default {

    method: 'GET',
    path: "/user/:id",

    execute: async (req, res) =>
    {

        const accountId = req.params.id;

        console.log(`Received GET : USER request - ${accountId}`);

        // Find specific account data on the DB using ID
        const account = await prisma.account.findFirst({
            where: { id: Number(accountId) }
        });

        if(!account) {
            return res.send({type: ResponseTypes.NoUserFound});
        }

        res.send({type: ResponseTypes.UserData, data: account});

    }
};
