const config  =  require('../config/db');
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
const _sequelize = require('sequelize');

const {
    Zone,
    Collecte,
    CollecteDechet,
	Menage,
	Client,
    sequelize
} = config;

module.exports={
    create:async function(id_user){   
        const date = (new Date()).toLocaleDateString().replaceAll("/","-") +' '+ (new Date()).toLocaleTimeString();

        return await  Collecte.create({
            id_user:id_user,
            ouverture:date
        });
    },
    createCollecteDechet:async function(id_menage,id_collecte,date_dernier_collecteTwo,intervale_de_collecte){        
        return await  CollecteDechet.create({
            id_menage:id_menage,
            id_collecte:id_collecte,
			date_dernier_collecte:date_dernier_collecteTwo,
			intervale_de_collecte:intervale_de_collecte
        });
    },
    clotureCollecte:async function(id_collecte){        
        const date = (new Date()).toLocaleDateString().replaceAll("/","-") +' '+ (new Date()).toLocaleTimeString();

        await Collecte.update(
            {
              fermeture:date
            },
            {
            where:{
                id:id_collecte
            }
        });
    },
    getAllZones:async function(){
        return await Zone.findAll();
    },
    getOpenCollecte:async function(id_user){
        const date  = (new Date()).toLocaleDateString().split('/');
        const year  = (new Date()).getFullYear();
        const month = date[1];
        const day   = date[0];

        const sql = `SELECT 
                id, 
                ouverture, 
                fermeture, 
                id_user, 
                createdAt, 
                updatedAt 
            FROM collectes 
            WHERE DAY(createdAt) = ${day.toString()} AND 
                id_user = ${parseInt(id_user)} AND YEAR(createdAt) = ${year.toString()} 
                AND MONTH(createdAt) = ${month.toString()} AND fermeture IS NULL
                LIMIT 1
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );
    },
    getCollecte:async function(id_user){
        const date  = (new Date()).toLocaleDateString().split('/');
        const year  = (new Date()).getFullYear();
        const month = date[1];
        const day   = date[0];

        const sql = `SELECT 
                id, 
                ouverture, 
                fermeture, 
                id_user, 
                createdAt, 
                updatedAt 
            FROM collectes 
            WHERE DAY(createdAt) = ${day.toString()} AND 
                id_user = ${parseInt(id_user)} AND YEAR(createdAt) = ${year.toString()} 
                AND MONTH(createdAt) = ${month.toString()}
                AND DAY(createdAt) = ${day.toString()}
                LIMIT 1
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );        
    },
    getCollecteDechetForAdmin:async function(month,year){
        const sql = `SELECT 
                clients.*,
                menages.id_client,
                menages.coord_longitude,
                menages.coord_latitude,
                menages.id_adresse,
                menages.id_zone as zone_id,
                adresses.id as t_id_adresse,
                adresses.id_commune,
                adresses.id_quartier,
                adresses.avenue,
                adresses.num_parcelle,
                communes.id as t_commune_id,
                communes.nom as t_commune_nom,
                quartiers.id as t_commune_id,
                quartiers.nom as t_quartier_nom,
                collecte_dechets.id as collecte_dechet_id,
                collecte_dechets.id_menage as collecte_dechet_id_menage,
                collecte_dechets.id_collecte as collecte_dechet_id_collecte,
                collecte_dechets.createdAt as collecte_dechet_date,
                collectes.id as collecte_id,
                zone_couvertures.id as t_zone_id,
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
            LEFT OUTER JOIN  collecte_dechets 
                    ON menages.id = collecte_dechets.id_menage        
            LEFT OUTER JOIN  collectes
                    ON collecte_dechets.id_collecte = collectes.id    
            LEFT OUTER JOIN  zone_couvertures
                    ON menages.id_zone = zone_couvertures.id 
            WHERE YEAR(collecte_dechets.createdAt) = ${year.toString()} AND 
                  MONTH(collecte_dechets.createdAt) = ${month.toString()}
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );        
    },
    getCollecteDechetForOperator:async function(month,year,id_user){
        const sql = `SELECT 
                clients.*,
                menages.id_client,
                menages.coord_longitude,
                menages.coord_latitude,
                menages.id_adresse,
                menages.id_zone as zone_id,
                adresses.id as t_id_adresse,
                adresses.id_commune,
                adresses.id_quartier,
                adresses.avenue,
                adresses.num_parcelle,
                communes.id as t_commune_id,
                communes.nom as t_commune_nom,
                quartiers.id as t_commune_id,
                quartiers.nom as t_quartier_nom,
                collecte_dechets.id as collecte_dechet_id,
                collecte_dechets.id_menage as collecte_dechet_id_menage,
                collecte_dechets.id_collecte as collecte_dechet_id_collecte,
                collecte_dechets.createdAt as collecte_dechet_date,
                collectes.id as collecte_id,
                collectes.id_user as collecte_id_user,
                zone_couvertures.id as t_zone_id,
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
            LEFT OUTER JOIN  collecte_dechets 
                    ON menages.id = collecte_dechets.id_menage        
            LEFT OUTER JOIN  collectes
                    ON collecte_dechets.id_collecte = collectes.id    
            LEFT OUTER JOIN  zone_couvertures
                    ON menages.id_zone = zone_couvertures.id 
            WHERE YEAR(collecte_dechets.createdAt) = ${year.toString()} AND 
                  MONTH(collecte_dechets.createdAt) = ${month.toString()} AND
                  collectes.id_user = ${id_user}
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );        
    },
    getCollecteDechetForClient:async function(month,year,id_user,id_client){
        const sql = `SELECT 
                clients.*,
                menages.id_client,
                menages.coord_longitude,
                menages.coord_latitude,
                menages.id_adresse,
                menages.id_zone as zone_id,
                adresses.id as t_id_adresse,
                adresses.id_commune,
                adresses.id_quartier,
                adresses.avenue,
                adresses.num_parcelle,
                communes.id as t_commune_id,
                communes.nom as t_commune_nom,
                quartiers.id as t_commune_id,
                quartiers.nom as t_quartier_nom,
                collecte_dechets.id as collecte_dechet_id,
                collecte_dechets.id_menage as collecte_dechet_id_menage,
                collecte_dechets.id_collecte as collecte_dechet_id_collecte,
                collecte_dechets.createdAt as collecte_dechet_date,
                collectes.id as collecte_id,
                collectes.id_user as collecte_id_user,
                zone_couvertures.id as t_zone_id,
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
            LEFT OUTER JOIN  collecte_dechets 
                    ON menages.id = collecte_dechets.id_menage        
            LEFT OUTER JOIN  collectes
                    ON collecte_dechets.id_collecte = collectes.id    
            LEFT OUTER JOIN  zone_couvertures
                    ON menages.id_zone = zone_couvertures.id 
            WHERE YEAR(collecte_dechets.createdAt) = ${year.toString()} AND 
                  MONTH(collecte_dechets.createdAt) = ${month.toString()} AND
                  collectes.id_user = ${id_user} AND clients.id = ${id_client}
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );        
    },
	update:async function(idClient,date_dernier_collecteTwo,intervale_de_collecte){        
        await Menage.update(
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
