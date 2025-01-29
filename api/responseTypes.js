/*
    Omar Johnson
    Created on: 1/19/25
 */

// DIFFERENT API RESPONSE TYPES TO RETURN

const ResponseTypes =
{
    MissingParameter: 'MISSING_REQUIRED_PARAM',
    UserData: 'USER_DATA',
    NoUserFound: 'NO_USER_FOUND',
    AuthFailed: 'AUTHENTICATION_FAILED',
    AuthSuccess: 'AUTHENTICATION_OKAY',
    AuthMismatch: 'AUTHENTICATION_MISMATCH',
    InvalidParameter: 'INVALID_PARAM',
    Error: 'ERROR_UNKNOWN',
    Success: 'OPERATION_SUCCESS'
};

export { ResponseTypes };