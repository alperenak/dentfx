const config = {
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? 'https://dentfx-back-dev.herokuapp.com/'
      : 'https://dentfx-back-dev.herokuapp.com/',
  // baseUrl:
  //   process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : '',
};

module.exports = config;
