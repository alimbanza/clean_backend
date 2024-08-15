//const Validator                  = require('body-validator');
const userService  = require('../services/user.service'); 
const helper       = require('../helper/helper'); 
const {sequelize}  = require('../config/db');
const jwt    = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/*
const {
    userValidationSchema,
    userUpdateValidationSchema
} = require('./Validator/user.validator');
*/

module.exports={
    login:async (req,res)=>{

        const {email,password} = req.body;

        const userExist = await userService.accountExist(email);  

        if(userExist == null){
            return res.json({
                success:false,
                message:"Indentifiants incorrects"
            });   
        }

        const hashedPassword  = userExist.dataValues.password;
        const passwordCompare = bcrypt.compareSync(password, hashedPassword); 

        if(!passwordCompare){
            return res.json({
                success:false,
                message:"Indentifiants incorrects"
            });   
        }

        const userId = userExist.dataValues.id;
        const role = userExist.dataValues.role;

        const token = jwt.sign({
            id:userId
        },"[|`\^123456789zdyftf0065@@@###", {
            expiresIn: 360000
        });

        return res.json({
            success:true,
            message:"Connexion réussie",
            token:token,
            role:role
        });     
    },
    index:async (req,res)=>{
        const users = await userService.getAllUsers();     

        return res.json({
            success:true,
            message:"Utilisateur récupérés",
            data:users
        });    
    },
    store:async (req,res)=>{
       const {email,password,role,status} = req.body;
        
       const userExist = await userService.accountExist(email); 

       if(userExist != null){
            return res.json({
                success:false,
                message:"Utilisateur déjà enregistré"
            });   
       }

       const salt = bcrypt.genSaltSync(10);
       const hashPassword = bcrypt.hashSync(password, salt);
       
       const newUser = await userService.create(email,hashPassword,role,status);
       
       return res.json({
            success:true,
            message:"Utilisateur enregistré",
            data:newUser
        });   
    }
}
