const router = require('express').Router();
const { authenticate } = require('../controllers/Authentication');

router.post('/', authenticate);

module.exports = router;

