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
    Paiement,
    sequelize
} = config;

module.exports={
    create:async function(id_menage,id_user,montant){        
        await Paiement.create({
            id_menage:id_menage,
            id_user:id_user,
            montant:montant,
            devise:"CDF"
        });
    },
    paiementExist:async function(id_menage,month,year){        
        const sql = `SELECT 
                        *
                    FROM paiements
            WHERE YEAR(paiements.createdAt) = ${year.toString()} AND 
                  MONTH(paiements.createdAt) = ${month.toString()} AND
                  id_menage = ${id_menage}
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );
    },
    getAllClientsPaiements:async function(month,year){
        const sql = `SELECT 
                clients.*,
                menages.id_client,
                menages.id_adresse,
                adresses.id as t_adresse_id,
                adresses.id_commune,
                adresses.id_quartier,
                adresses.avenue,
                communes.id as t_commune_id,
                communes.nom as nom_commune,
                quartiers.id as t_quartier_id,
                quartiers.nom as nom_quartier,
                zone_couvertures.id as t_zone_couverture,
                zone_couvertures.nom as nom_zone,
                paiements.id t_paiement_id,
                paiements.id_menage t_paiement_menage,
                paiements.montant,
                paiements.devise,
                paiements.mois,
                paiements.createdAt as date_paiement
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
            LEFT OUTER JOIN  paiements 
                    ON menages.id = paiements.id_menage
            WHERE YEAR(paiements.createdAt) = ${year.toString()} AND 
                    MONTH(paiements.createdAt) = ${month.toString()} 
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );
    },
    customerRegisterDate:async function(id_menage){        
        const sql = `SELECT 
                        MONTH(createdAt) as mois_enreg,
                        YEAR(createdAt) as annee_enreg
                    FROM menages
                    WHERE id = ${id_menage}
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );
    },
    getPaiementForClient:async function(month,year,id_menage){
        const sql = `SELECT 
                clients.*,
                menages.id_client,
                menages.id_adresse,
                adresses.id as t_adresse_id,
                adresses.id_commune,
                adresses.id_quartier,
                adresses.avenue,
                communes.id as t_commune_id,
                communes.nom as nom_commune,
                quartiers.id as t_quartier_id,
                quartiers.nom as nom_quartier,
                zone_couvertures.id as t_zone_couverture,
                zone_couvertures.nom as nom_zone,
                paiements.id t_paiement_id,
                paiements.id_menage t_paiement_menage,
                paiements.montant,
                paiements.devise,
                paiements.mois,
                paiements.createdAt as date_paiement
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
            LEFT OUTER JOIN  paiements 
                    ON menages.id = paiements.id_menage
            WHERE YEAR(paiements.createdAt) = ${year.toString()} AND 
                    MONTH(paiements.createdAt) = ${month.toString()} AND
                    paiements.id_menage = ${id_menage}
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );
    },
    getPaiementDetailById:async function(id_paiement){
        const sql = `SELECT 
                clients.*,
                menages.id_client,
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
                zone_couvertures.nom as nom_zone,
                paiements.id t_paiement_id,
                paiements.id_menage t_paiement_menage,
                paiements.montant,
                paiements.devise,
                paiements.mois,
                paiements.createdAt as date_paiement
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
            LEFT OUTER JOIN  paiements 
                    ON menages.id = paiements.id_menage
            WHERE   paiements.id = ${id_paiement}
        `;

        return await sequelize.query(
            sql,
            {
            type: QueryTypes.SELECT
            }
        );
    },
};
