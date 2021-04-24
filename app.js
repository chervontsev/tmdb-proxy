const express = require('express');
const helmet = require('helmet');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const { PORT = 8000 } = process.env;

app.use(helmet());
app.use('/', createProxyMiddleware({ 
  target: 'https://api.themoviedb.org',
  changeOrigin: true,
}));
app.listen(PORT);
