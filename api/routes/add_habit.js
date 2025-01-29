/*
    Omar Johnson
    Route /habit/add
    Created on: 1/28/25

    Post habit information to add a new habit to the system
 */

import prisma from '../client.js';
import { ResponseTypes } from "../responseTypes.js";
import {Prisma} from "@prisma/client";

export default {

    method: 'POST',
    path: "/habit/add",

    execute: async (req, res) =>
    {
        const user = req.body.account_id;

        if(!user) {
            return res.json({type: ResponseTypes.MissingParameter, code: 400});
        }

        const matchingAccount = await prisma.account.findFirst({
            where: {
                id: user
            }
        });

        if(!matchingAccount) {
            return res.send({type: ResponseTypes.NoUserFound, code: 400});
        }

        // Validate all input data
        let { description, type, difficulty = 0, points = 5, targetNumber = 0 } = req.body;

        const validTypes = ['MIN', 'MAX', 'DO', 'DNT'];

        type = type.toUpperCase();

        if(!description || !type || !validTypes.includes(type)) {
            return res.send({type: ResponseTypes.InvalidParameter, code: 400, parameter: 'type'});
        }

        if(type !== 'MIN' && type !== 'MAX') {
            targetNumber = Prisma.skip;
        }

        // Use prisma to enter the new habit data
        try {
            const habit = await prisma.habit.create({
                data: { description, type, difficulty, points, targetNumber, currentNumber: Prisma.skip, accountId: user }
            });

            return res.send({type: ResponseTypes.Success, code: 200, data: habit})
        } catch(err) {
            return res.send({type: ResponseTypes.Error, code: 400, err});
        }

    }
};
