const config = {
  baseUrl:
    process.env.NODE_ENV === "development"
      ? "http://3.122.254.180:5001"
      : "https://dentfx-back-dev.herokuapp.com/",
  // baseUrl:
  //   process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : '',
};

module.exports = config;
