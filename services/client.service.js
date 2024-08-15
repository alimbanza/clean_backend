const config  =  require('../config/db');
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');

const {
    User,
    Personnel,
    Client,
    Adresse,
    Menage,
    Commune,
    Quartier,
    Zone,
    sequelize
} = config;

module.exports={
    create:async function(nom,postnom,prenom,sexe,commune_id,id_quartier,avenue,num_parcelle,id_user,coord_longitude,coord_latitude,id_zone,type_client,interval_collecte){        
        const client = await  Client.create({
            nom:nom,
            postnom:postnom,
            prenom:prenom,
            sexe:sexe,
			type_client,
			intervale_de_collecte:parseInt(interval_collecte)
        });

        const clientId =  client.dataValues.id;
		
        const clientAdresse = await Adresse.create({
            id_commune:commune_id,
            id_quartier:id_quartier,
            avenue:avenue,
            num_parcelle:num_parcelle
        });

        const idAdresse = clientAdresse.dataValues.id;

        const menageClient = await Menage.create({
            id_client:clientId,
            id_zone:id_zone,
            coord_longitude:coord_longitude,
            coord_latitude:coord_latitude,
            id_adresse:idAdresse,
			type_client,
			intervale_de_collecte:parseInt(interval_collecte)
        });

        const coordonnees = {
            client:client,
            menage:menageClient,
            adresse:clientAdresse
        }

        return coordonnees;
    },
    getAllClients:async function(){
        const sql = `SELECT 
                clients.*,
                menages.id_client,
                menages.id as t_id_menage,
                menages.coord_longitude,
                menages.coord_latitude,
                menages.id_adresse,
                adresses.id as t_adresse_id,
                adresses.id_commune,
                adresses.id_quartier,
                adresses.avenue,
                adresses.num_parcelle,
                communes.id as t_commune_id,
                communes.nom as nom_commune,
                quartiers.id as t_quartier_id,
                quartiers.nom as nom_quartier,
                zone_couvertures.id as t_zone_couverture,
                zone_couvertures.nom as nom_zone
            FROM clients 
            LEFT OUTER JOIN  menages 
                    ON clients.id = menages.id_client
            LEFT OUTER JOIN  adresses 
                    ON menages.id_adresse = adresses.id
            LEFT OUTER JOIN  communes 
                    ON adresses.id_commune = communes.id
            LEFT OUTER JOIN  quartiers 
                    ON adresses.id_quartier = quartiers.id
            LEFT OUTER JOIN  zone_couvertures 
                    ON menages.id_zone = zone_couvertures.id
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );
    },
	findMenageById:async function(id){
        return await Menage.findOne({
            where:{
                id:id
            }
        });
    },
	findClientById:async function(id){
        return await Client.findOne({
            where:{
                id:id
            }
        });
    },	
	update:async function(idClient,date_dernier_collecteTwo,intervale_de_collecte){        
        await Client.update(
            {
              date_dernier_collecte:date_dernier_collecteTwo,
			  intervale_de_collecte:intervale_de_collecte
            },
            {
            where:{
                id:idClient
            }
        });
    },
};
