const UserModel = require('../models/User');
const { userSchema } = require('../validators');
const encode = require('../utils/encode');
const uuidv4 = require('uuid').v4;


module.exports = {

    async create(req, res) {
        try {

            if (userSchema.store.validate(req.body).error) throw { code: 403 }

            const { name, username, password } = req.body;

            const userExists = await UserModel.findOne({
                where: {
                    username
                }
            })

            if (userExists) throw { code: 409 }

            await UserModel.create({
                id: uuidv4(),
                name,
                username,
                password: encode(password)
            })

            return res.status(200).json({})

        } catch (error) {
            return res.status(error.code || 500).json({})
        }
    }

}