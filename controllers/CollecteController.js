const userService  = require('../services/user.service'); 
const helper       = require('../helper/helper'); 
const collecteService = require('../services/collecte.service');
const clientService = require('../services/client.service');

module.exports={
    index:async (req,res)=>{
        const idUser = req.id_user;
        const collecteOuverte = await collecteService.getOpenCollecte(idUser);     
  
        return res.json({
            success:true,
            message:"Collecte récupérée",
            data:collecteOuverte
        });    
    },
    storeCollecteDechet:async (req,res)=>{
        const {
             id_menage
        } = req.body;

        const idUser = req.id_user;

        const collecteExiste = await collecteService.getCollecte(idUser);

        if(collecteExiste.length > 0){
            let [collecteOp] =  collecteExiste;
            let collecteId = collecteOp.id;

            if(collecteOp.fermeture != null){
                return res.json({
                    success:false,
                    message:"Collecte des déchets déjà cloturé"
                }); 
            }
			
			const menageData = await clientService.findMenageById(id_menage);
			const idClient = menageData.dataValues.id_client;
			const clientData = await clientService.findClientById(idClient);
			const date_dernier_collecte = clientData.dataValues.date_dernier_collecte;
			const intervale_de_collecte = clientData.dataValues.intervale_de_collecte;
			let   date_dernier_collecteTwo = "";
			
			const date = (new Date()).toLocaleDateString().split('/');
			let formateDate = date[2]+'-'+date[1]+'-'+date[0] +' '+ (new Date()).toLocaleTimeString(); 
			
			if(!date_dernier_collecte){
				date_dernier_collecteTwo = formateDate;
			}else{
				date_dernier_collecteTwo = date_dernier_collecte;
			}
			
            const newCollecte = await collecteService.createCollecteDechet(id_menage,collecteId,date_dernier_collecteTwo,intervale_de_collecte);
			const collectCurrentDate = newCollecte.dataValues.createdAt;
			await clientService.update(idClient,date_dernier_collecteTwo,intervale_de_collecte);
			await collecteService.update(id_menage,date_dernier_collecteTwo,intervale_de_collecte);
			
            return res.json({
                success:true,
                message:"Collecte des déchets enregistrée"
            }); 
            
        }else{
			
            const newCollecte = await collecteService.create(idUser);
            let collecteId = newCollecte.dataValues.id;
			
			const menageData = await clientService.findMenageById(id_menage);
			const idClient = menageData.dataValues.id_client;
			const clientData = await clientService.findClientById(idClient);
			const date_dernier_collecte = clientData.dataValues.date_dernier_collecte;
			const intervale_de_collecte = clientData.dataValues.intervale_de_collecte;
			let   date_dernier_collecteTwo = "";
			
			const date = (new Date()).toLocaleDateString().split('/');
			let formateDate = date[2]+'-'+date[1]+'-'+date[0] +' '+(new Date()).toLocaleTimeString(); 
			
			if(!date_dernier_collecte){
				date_dernier_collecteTwo = formateDate;
			}else{
				date_dernier_collecteTwo = date_dernier_collecte;
			}
			
            const newCol = await collecteService.createCollecteDechet(id_menage,collecteId,date_dernier_collecteTwo,intervale_de_collecte);
	
			const collectCurrentDate = newCol.dataValues.createdAt;
			await clientService.update(idClient,date_dernier_collecteTwo,intervale_de_collecte);
			await collecteService.update(id_menage,date_dernier_collecteTwo,intervale_de_collecte);
			
            return res.json({
                success:true,
                message:"Collecte des déchets enregistrée"
            }); 
        }
     },
     clotureCollecte:async (req,res)=>{
        const {
            id_collecte
       } = req.body;

       const idUser = req.id_user;

       const collecteExiste = await collecteService.getCollecte(idUser);

       if(collecteExiste.length > 0){
        let [collecteOp] =  collecteExiste;
        let collecteId = collecteOp.id;

        if(collecteOp.fermeture != null){
            return res.json({
                success:false,
                message:"Collecte des déchets déjà cloturé"
            }); 
        }
        
        await collecteService.clotureCollecte(collecteId);

        return res.json({
            success:true,
            message:"Cloture collecte réussie"
        }); 
        
        }else{
            return res.json({
                success:true,
                message:"Auncune collecte trouvée"
            }); 
        }
    },
    getCollecteDechetForAdmin:async (req,res)=>{
        const {
            month,
            year
       } = req.query;

       if(!month || !year){
            return res.json({
                success:false,
                message:"Mois ou année invalide"
            }); 
       }

       if(isNaN(month) || isNaN(year)){
            return res.json({
                success:false,
                message:"Mois ou année invalide"
            });
       }

       const collecteDechets = await collecteService.getCollecteDechetForAdmin(month,year);

       return res.json({
            success:true,
            message:"Collectes des déchets récupérées",
            data:collecteDechets
       }); 
    },
    getCollecteDechetForOperateur:async (req,res)=>{
        const {
            month,
            year
       } = req.query;

       if(!month || !year){
            return res.json({
                success:false,
                message:"Mois ou année invalide"
            }); 
       }

       if(isNaN(month) || isNaN(year)){
            return res.json({
                success:false,
                message:"Mois ou année invalide"
            });
       }

       const idUser = req.id_user;
       
       const collecteDechets = await collecteService.getCollecteDechetForOperator(month,year,idUser);

       return res.json({
            success:true,
            message:"Collectes des déchets récupérées",
            data:collecteDechets
       }); 
    },
    getCollecteDechetForClient:async (req,res)=>{
        const {
            month,
            year,
            id_client
       } = req.query;

       if(!month || !year || !id_client){
            return res.json({
                success:false,
                message:"Mois, année ou client  invalides"
            }); 
       }

       if(isNaN(month) || isNaN(year) || isNaN(id_client)){
            return res.json({
                success:false,
                message:"Mois,année ou client invalides"
            });
       }

       const idUser = req.id_user;

       const collecteDechets = await collecteService.getCollecteDechetForClient(month,year,idUser,id_client);

       return res.json({
            success:true,
            message:"Collectes des déchets récupérées",
            data:collecteDechets
       }); 
    }
}
