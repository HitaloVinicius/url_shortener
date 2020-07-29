const shortid = require('shortid');

const UrlModel = require('../models/Url');
const urlValidator = require('../utils/urlValidator');

module.exports = {

    async filter(req, res) {
        try {
            const url = await UrlModel.findByPk(req.params.id);

            if (!url) {
                throw { code: 404, message: 'URL not found' };
            };

            await UrlModel.increment(
                {
                    clicks: 1,
                },
                {
                    where: {
                        id: req.params.id,
                    }
                });

            return res.status(200).json({
                url: {
                    original: url.original,
                    short: `${process.env.SHORT_DOMAIN}/${url.id}`,
                },
            });
        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    },

    async stats(req, res) {
        try {
            const user = req.user;

            const url = await UrlModel.findOne({
                where: {
                    id: req.params.id,
                    user_id: user.id,
                }
            })

            if (!url) {
                throw { code: 404, message: 'URL not found' };
            };

            res.status(200).json({
                info: {
                    url: {
                        original: url.original,
                        short: `${process.env.SHORT_DOMAIN}/${url.id}`,
                    },
                    createdAt: url.createdAt,
                    lastAccess: url.updatedAt,
                    stats: {
                        clicks: url.clicks,
                    },
                },
            });
        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    },

    async create(req, res) {
        try {
            const user = req.user;

            const { originalUrl } = req.body;

            if (!urlValidator(originalUrl)){
                throw { code: 403, message: 'Invalid URL' };
            };

            const url = await UrlModel.create({
                id: shortid.generate(),
                clicks: 0,
                original: originalUrl,
                user_id: user.id,
            });

            return res.status(200).json(url);

        } catch (error) {
            return res.status(error.code || 500).json(error);
        }
    }
}