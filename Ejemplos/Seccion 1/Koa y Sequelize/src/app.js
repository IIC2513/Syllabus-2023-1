const Koa = require('koa');
const Logger = require('koa-logger');
const router = require('./routes');

// Crear instancia de Koa
const app = new Koa();

// Development logging
app.use(Logger());

// routes
app.use(router.routes());

module.exports = app;
