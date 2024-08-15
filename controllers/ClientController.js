const userService  = require('../services/user.service'); 
const helper       = require('../helper/helper'); 
const clientServise = require('../services/client.service');

module.exports={
    index:async (req,res)=>{
        const clients = await clientServise.getAllClients();   
        
        return res.json({
            success:true,
            message:"Client récupérés",
            data:clients
        });    
    },
    store:async (req,res)=>{
       const {
        nom,
        postnom,
        prenom,
        sexe,
        commune_id,
        id_quartier,
        avenue,
        num_parcelle,
        coord_longitude,
        coord_latitude,
        id_zone,
		type_client,
		interval_collecte
       } = req.body;
	
	//console.log(req.body);
	//throw new Error("erreur");
       const newPersonnel = await clientServise.create(nom,postnom,prenom,sexe,commune_id,id_quartier,avenue,num_parcelle,1,coord_longitude,coord_latitude,id_zone,type_client,interval_collecte);
       
       return res.json({
            success:true,
            message:"Client enregistré",
            data:newPersonnel
        }); 
    }
}
