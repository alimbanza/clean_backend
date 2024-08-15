const Sequelize             = require('sequelize');
const UserModel             = require('../models/user');
const PersonnelModel        = require('../models/personnel');
const ClientModel           = require('../models/client');
const AdresseModel          = require('../models/adresse');
const MenageModel           = require('../models/menage');
const CommuneModel          = require('../models/commune');
const QuartierModel         = require('../models/quartier');
const ZoneModel             = require('../models/zone_couverture');
const CollecteModel         = require('../models/collecte');
const CollecteDechetModel   = require('../models/collecte_dechet');
const PaiementModel         = require('../models/paiement');

const sequelize = new Sequelize("clean_app","root",'',{
    host    : "localhost",
	port	: "3306",
    dialect : "mysql"
});

const User          = UserModel(sequelize,Sequelize);
const Personnel     = PersonnelModel(sequelize,Sequelize);
const Client        = ClientModel(sequelize,Sequelize);
const Adresse       = AdresseModel(sequelize,Sequelize);
const Menage        = MenageModel(sequelize,Sequelize);
const Commune       = CommuneModel(sequelize,Sequelize);
const Quartier      = QuartierModel(sequelize,Sequelize);
const Zone          = ZoneModel(sequelize,Sequelize);
const Collecte      = CollecteModel(sequelize,Sequelize);
const CollecteDechet= CollecteDechetModel(sequelize,Sequelize);
const Paiement      = PaiementModel(sequelize,Sequelize);

module.exports = {
    User,
    Personnel,
    Client,
    Adresse,
    Menage,
    Commune,
    Quartier,
    Zone,
    Collecte,
    CollecteDechet,
    Paiement,
    sequelize
};

