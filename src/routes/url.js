const router = require('express').Router();
const { create, filter } = require('../controllers/Url');
const isUserAuthenticated = require('../middlewares/authenticator');

router.get('/:id', filter)
router.post('/', isUserAuthenticated, create)

module.exports = router

