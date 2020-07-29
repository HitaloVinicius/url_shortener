const crypto = require('crypto');

module.exports = (password) => {
    if (!password) {
        return false;
    };
    
    return crypto
        .createHash('md5')
        .update(process.env.SECRET_PASSWORD + password)
        .digest('hex');
};