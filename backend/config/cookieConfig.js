//const jwtCookieName = process.env.JWT_COOKIE_NAME || 'jwt';

const getJwtCookieNameTest = () => {
    return process.env.JWT_COOKIE_NAME || 'jwt';
};

export { getJwtCookieNameTest };