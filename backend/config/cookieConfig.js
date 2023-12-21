//const jwtCookieName = process.env.JWT_COOKIE_NAME || 'jwt';

const getJwtCookieName = () => {
    return process.env.JWT_COOKIE_NAME || 'jwt';
};

export { getJwtCookieName };