const userService  = require('../services/user.service'); 
const helper       = require('../helper/helper'); 
const zoneService = require('../services/zone.service');

module.exports={
    index:async (req,res)=>{
        const zones = await zoneService.getAllZones();     
        
        return res.json({
            success:true,
            message:"Zones récupérées",
            data:zones
        });    
    },
    store:async (req,res)=>{
       const {
            nom,
            etat,
            coordonnees
       } = req.body;

       const zoneExist = await zoneService.zoneExist(nom);
       
       if(zoneExist != null){
            return res.json({
                success:false,
                message:"Cette zone est déjà enregistrée"
            }); 
       }
       
       const newZone = await zoneService.create(nom,etat,coordonnees);
       
       return res.json({
            success:true,
            message:"Zone enregistré",
            data:newZone
        }); 
    }
}
