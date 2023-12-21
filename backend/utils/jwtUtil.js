import jwt from 'jsonwebtoken';
import { getJwtCookieName } from '../config/cookieConfig.js';

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

    let cookieName = getJwtCookieName();
    res.cookie(cookieName, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',  //Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
    });
};

const destroyJwtCookie = (res) => {
    let cookieName = getJwtCookieName();
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



export { createJwtToken, setJwtCookie, destroyJwtCookie, updateTokenExpiration };