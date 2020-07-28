const router = require('express').Router();
const User = require('../models/User');

User.create({
    id: 'Test',
    name: 'TestName',
    username: 'TestUsername',
    password: 'TestPass'
})

module.exports = router

