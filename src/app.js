require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsConfig = require('./config/cors');

const server = express();
const http = require('http').createServer(server);

const userRouter = require('./routes/user');
const authRouter = require('./routes/authentication');

if (process.env.NODE_ENV === 'development') server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(cors(corsConfig));

server.use('/user', userRouter);
server.use('/auth', authRouter);


module.exports = http;