require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsConfig = require('./config/cors');

const port = process.env.PORT;

const server = express();
const http = require('http').createServer(server);

const userRouter = require('./routes/user');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(cors(corsConfig));

server.use('/user', userRouter);

http.listen(port, () => {
    console.log(`Running on port ${port}`);
})