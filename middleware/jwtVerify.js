const jwt    = require('jsonwebtoken');

module.exports = function authMiddleware(req, res, next) {
    // Get token from header
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            success:false,
            message:'Aucun token fourni'
        });
    }
    if (token.split(' ')[0] !== 'Bearer') {
        return res.status(401).json({
            success:false,
            message:'Format du token invalide'
        })
    }
    try {
        const verify = jwt.verify(token.split(' ')[1],"[|`\^123456789zdyftf0065@@@###");
      
        req.id_user = verify.id;

        next();
    } catch (err) {
        console.log(err)
        return res.status(401).json({
            success:false,
            message:'Token invalide'
        });
    }
  }