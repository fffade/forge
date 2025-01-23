/*
    Omar Johnson
    Route /habits/:id
    Created on: 1/19/25

    Returns the list of habits of a specified  account
 */

import prisma from '../client.js';
import { ResponseTypes } from "../responseTypes.js";

export default {

    method: 'GET',
    path: "/habits/:id",

    execute: async (req, res) =>
    {

        const accountId = req.params.id;

        console.log(`Received GET : HABITS request - ${accountId}`);

        // Find matching habits to the specified account
        const account = await prisma.account.findFirst({
            where: { id: Number(accountId) },
            include: { habits: true }
        });

        if(!account) {
            return res.send({type: ResponseTypes.NoUserFound});
        }

        res.send({type: ResponseTypes.UserData, data: account.habits});

    }
};
