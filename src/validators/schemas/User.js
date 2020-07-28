const Joi = require('@hapi/joi');

module.exports = {

    store: Joi.object({
        name: Joi.string().min(1).max(100).required(),
        username: Joi.string().regex(/^[a-zA-Z0-9_]{8,30}$/).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9!@#$%&*]{8,30}$/).required()
    })
}