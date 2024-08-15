const router = require('express').Router();
const {
    index,
    store
} = require('../controllers/ZoneController');

router.get('/',index);
router.post('/store',store);

module.exports = router;
