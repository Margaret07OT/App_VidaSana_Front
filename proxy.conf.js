const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://lecmfzhvv4.execute-api.us-east-1.amazonaws.com/Prod', // URL base de tu servidor backend sin la ruta específica
      changeOrigin: true,
    })
  );
};
