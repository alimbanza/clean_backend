const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
var cors             = require('cors')
const authMiddleware = require('./middleware/jwtVerify');

/*
* Définition de fichiers static
*/ 


/*
* Configuration des requêtes en dehors du domaine                                                      
*/     

               
/*
* Configuration des paramètres express                                                      
*/              

app.use(cors())
app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

/*
* Initialisation des routes                                                 
*/  

app.use('/user',require('./routes/user.route'));
app.use('/personnel',authMiddleware,require('./routes/personnel.route'));
app.use('/client',authMiddleware,require('./routes/client.route'));
app.use('/zone',authMiddleware,require('./routes/zone.route'));
app.use('/collecte',authMiddleware,require('./routes/collecte.route'));
app.use('/paiement',authMiddleware,require('./routes/paiement'));
//app.use('/organisation',require('./routes/organisation.route'));
app.get('/test',function(req,res){
  res.send('Bonjour');
});
// app.use('/login',require('./routes/auth.route'));
// app.use('/',require('./routes/home.route'));

/*
* Lancement du serveur                                                   
*/  

app.listen(8500 || process.port,()=>{
    console.log('Application lancée');
});

