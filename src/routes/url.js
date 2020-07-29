const router = require('express').Router();
const { create, filter, stats } = require('../controllers/Url');
const isUserAuthenticated = require('../middlewares/authenticator');

router.get('/:id', filter);
router.get('/:id/details', isUserAuthenticated, stats);
router.post('/', isUserAuthenticated, create);

module.exports = router;

