const router = require('express').Router();
const {
    index,
    store
} = require('../controllers/ClientController');

router.get('/',index);
router.post('/store',store);

module.exports = router;
