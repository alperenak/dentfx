const config = {
    baseUrl: process.env.NODE_ENV === 'development' ? 'https://dentfx-back-dev.herokuapp.com/' : ''
};

module.exports = config;
