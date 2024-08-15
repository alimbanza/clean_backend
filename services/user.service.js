const config  =  require('../config/db');
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');

const {
    User,
    sequelize
} = config;

module.exports={
    create:async function(email,password,role,status){        
        return  await  User.create({
            email:email,
            password:password,
            role:"PERSONNEL",
            status:"ACTIF"
        });
    },
    accountExist:async function(email){
        return await User.findOne({
            where:{
                email:email
            }
        });
    },
    getUserById:async function(id){
        return await User.findOne({
            where:{
                id:id
            }
        });
    },
    suspendre:async function(id){
        return await User.update({
            status:"INACTIVE",
        },{
            where:{
                id:id
            }
        });
    },
    activer:async function(id){
        return await User.update({
            status:"ACTIVE"
        },{
            where:{
                id:id
            }
        });
    },
    getAllUsers:async function(){
        return await User.findAll();
    }
};
