/*
    Omar Johnson
    Read Secret
    Created on: 1/20/25

    Provides a utility method to read the unique secret from its file
 */
import fs from 'fs';

const readSecret = () =>
{
    const secret = fs.readFileSync(process.env.SECRET_PATH);

    if(secret.length <= 0) {
        throw Error;
    }

    return secret;
};

export { readSecret };