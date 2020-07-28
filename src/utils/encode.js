const crypto = require('crypto');

module.exports = (password) => {
    return crypto
        .createHash('md5')
        .update(process.env.SECRET_PASSWORD + password)
        .digest('hex');
};