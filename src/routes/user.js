const router = require('express').Router();
const { create } = require('../controllers/User');

router.post('/', create);

module.exports = router;

