const router = require('express').Router();
const {
    index,
    store,
    findPersonnelThroughUser
} = require('../controllers/PersonnelController');

router.get('/',index);
router.post('/store',store);
router.get('/find',findPersonnelThroughUser);

module.exports = router;
