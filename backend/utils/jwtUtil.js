import jwt from 'jsonwebtoken';
import { getJwtCookieNameTest } from '../config/cookieConfig.js';

const createJwtToken = (userId) => {

    const token = jwt.sign(
        {
            userId
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h',
        }
    );

    return token;
};

const setJwtCookie = (res, token) => {

    let cookieName = getJwtCookieNameTest();
    res.cookie(cookieName, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',  //Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
    });
};

const destroyJwtCookie = (res) => {
    let cookieName = getJwtCookieNameTest();
    res.cookie(cookieName, '', {
        httpOnly: true,
        expires: new Date(0),
    });
};

const updateTokenExpiration = (userId) => {

    // Calculate the new expiration time (current time + 1 hour)
    const newExpiration = Math.floor(Date.now() / 1000) + 60 * 60;

    // Create a new token with the updated expiration
    const updatedToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: newExpiration,
    });

    return updatedToken;

};

// @desc        For testing. Since stored cookie use different timezone.
// @example     getCookieExpiryWithCurrentTimezone('Wed, 20 Dec 2023 18:16:27 GMT')
const getCookieExpiryWithCurrentTimezone = (utcTimestamp) => {

    // UTC timestamp from the "Expires" attribute
    //const utcTimestamp = "Wed, 20 Dec 2023 18:02:29 GMT";

    // Create a Date object from the UTC timestamp
    const utcDate = new Date(utcTimestamp);

    // Get the local time zone
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Format the local date and time
    const localDate = utcDate.toLocaleString(undefined, { timeZone: localTimeZone });

    console.log(localDate); // Display the local date and time

};

export { createJwtToken, setJwtCookie, destroyJwtCookie, updateTokenExpiration };