const router = require('express').Router();
const {
    index,
    storeCollecteDechet,
    clotureCollecte,
    getCollecteDechetForAdmin,
    getCollecteDechetForOperateur,
    getCollecteDechetForClient
} = require('../controllers/CollecteController');

router.get('/ouverte',index);
router.post('/collecte-dechets',storeCollecteDechet);
router.post('/cloture',clotureCollecte);
router.get('/foradmin',getCollecteDechetForAdmin);
router.get('/foroperator',getCollecteDechetForOperateur);
router.get('/forclient',getCollecteDechetForClient);
//router.post('/collecte-dechets',store);
//router.post('/store',store);

module.exports = router;
