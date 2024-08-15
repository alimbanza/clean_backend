const userService  = require('../services/user.service'); 
const helper       = require('../helper/helper'); 
const personnelServise = require('../services/personnel.servise');

module.exports={
    index:async (req,res)=>{
        const users = await personnelServise.getAllPersonnels();     

        return res.json({
            success:true,
            message:"Utilisateur récupérés",
            data:users
        });    
    },
    store:async (req,res)=>{
       const {
            nom,
            postnom,
            prenom,
            lieu_de_naissance,
            date_de_naissance,
            adresse,
            sexe,
            id_user
       } = req.body;
       
       const userHasRegisteredAsPersonnel = await personnelServise.getPersonnelByUserId(id_user);

       if(userHasRegisteredAsPersonnel != null){
            return res.json({
                success:false,
                message:"Ce compte utilisateur est déjà attribué "
            }); 
       }

       const newPersonnel = await personnelServise.create(nom,postnom,prenom,lieu_de_naissance,date_de_naissance,adresse,sexe,id_user)
    
       return res.json({
            success:true,
            message:"Personnel enregistré",
            data:newPersonnel
        }); 
    },
    findPersonnelThroughUser:async (req,res)=>{
        const {id_user} = req.query;
       
        const personnel = await personnelServise.getPersonnelByUserId(id_user)
     
        return res.json({
             success:true,
             message:"Personnel enregistré",
             data:personnel
         }); 
     },
}
