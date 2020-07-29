const jwt = require('jsonwebtoken');

const UserModel = require('../models/User');
const encode = require('../utils/encode');

module.exports = {

    async authenticate(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                throw { code: 403 };
            };

            const user = await UserModel.findOne({
                where: {
                    username,
                    password: encode(password),
                },
            });

            if (!user) {
                throw { code: 404 };
            };

            const auth = jwt.sign({ name: user.name, id: user.id }, process.env.SECRET_TOKEN);

            return res
                .status(200)
                .cookie('auth', auth)
                .json({ auth });

        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    }
}