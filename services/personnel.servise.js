const config  =  require('../config/db');
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');

const {
    User,
    Personnel,
    sequelize
} = config;

module.exports={
    create:async function(nom,postnom,prenom,lieu_de_naissance,date_de_naissance,adresse,sexe,id_user){        
        return  await  Personnel.create({
            nom:nom,
            postnom:postnom,
            prenom:prenom,
            lieu_de_naissance:lieu_de_naissance,
            date_de_naissance:date_de_naissance,
            adresse:adresse,
            sexe:sexe,
            id_user:id_user
        });
    },
    getPersonnelByUserId:async function(id){
        return await Personnel.findOne({
            where:{
                id_user:id
            }
        });
    },
    getAllPersonnels:async function(){
        return await Personnel.findAll();
    }
};
