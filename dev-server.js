// dev-server.js
// modeled after https://github.com/gaearon/react-transform-boilerplate

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './config/custom';

const APP_PORT = config.devServer.port;

const app = express();
const webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'cheap-module-eval-source-map';
webpackConfig.entry.unshift('webpack-hot-middleware/client');
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackConfig.plugins.push(new webpack.NoErrorsPlugin());
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(APP_PORT, () => {
  console.log(`Client dev server is now listening on port ${APP_PORT}`); // eslint-disable-line
});
