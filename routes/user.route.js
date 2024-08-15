const router = require('express').Router();
const authMiddleware = require('../middleware/jwtVerify');

const {
    index,
    create,
    store,
    edit,
    update,
    bloquer,
    login
} = require('../controllers/UserController');

router.get('/',authMiddleware,index);
router.post('/store',authMiddleware,store);
router.post('/login',login);

/*
router.get('/create',create);
router.get('/edit/:id',edit);
router.post('/update/',update);
router.get('/bloquer/:id',bloquer);
*/
module.exports = router;
