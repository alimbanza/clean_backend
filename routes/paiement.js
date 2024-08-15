const router = require('express').Router();

const {
    index,
    store,
    getPaiementForClient,
    getPaiementDetail
} = require('../controllers/PaiementController');

router.get('/',index);
router.post('/store',store);
router.get('/forclient',getPaiementForClient);
router.get('/detail',getPaiementDetail  );

module.exports = router;
