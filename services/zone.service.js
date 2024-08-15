const config  =  require('../config/db');
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');

const {
    Zone,
    sequelize
} = config;

module.exports={
    create:async function(nom,etat,coordonnees){        
        return await  Zone.create({
            nom,
            etat,
            coordonnees
        });
    },
    getAllZones:async function(){
        return await Zone.findAll();
    },
    zoneExist:async function(nom){
        return await Zone.findOne({
            where:{
                nom:nom
            }
        });
    }
};
