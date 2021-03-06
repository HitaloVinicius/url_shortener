require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const server = express();

const corsConfig = require('./config/cors');
const http = require('http').createServer(server);
const userRouter = require('./routes/user');
const authRouter = require('./routes/authentication');
const urlRouter = require('./routes/url');

if (process.env.NODE_ENV === 'development') {
    server.use(logger('dev'));
};
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(cors(corsConfig));

server.use('/user', userRouter);
server.use('/auth', authRouter);
server.use('/url', urlRouter);

module.exports = http;