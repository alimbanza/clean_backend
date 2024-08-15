const userService  = require('../services/user.service'); 
const helper       = require('../helper/helper'); 
const paiementService = require('../services/paiement.service');

module.exports={
    index:async (req,res)=>{
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

        const paiements = await paiementService.getAllClientsPaiements(month,year);   
        
        return res.json({
            success:true,
            message:"Paiements récupérés",
            data:paiements
        });    
    },
    store:async (req,res)=>{
       const {
            id_menage,
            month,
            year
       } = req.body;
       
       const montant = "500";
   
       const paiementExist = await paiementService.paiementExist(id_menage,month,year);

       if(paiementExist.length > 0){
            return res.json({
                success:false,
                message:"Le client a déjà payer pour ce mois"
            }); 
       }
       
       const date  = (new Date()).toLocaleDateString().split('/');
       const current_year  = (new Date()).getFullYear();
       const current_month = date[1];

       if(parseInt(year) > parseInt(current_year)){
            return res.json({
                success:false,
                message:"Année invalide"
            }); 
       }

       const customerRegisterDate = await paiementService.customerRegisterDate(id_menage);
       
       if(customerRegisterDate.length < 1){
            return res.json({
                success:false,
                message:"Client non trouvé"
            }); 
       }

       const clientEnregMois = customerRegisterDate[0].mois_enreg;
       const clientEnregAnnee = customerRegisterDate[0].annee_enreg;
       
       if((parseInt(year) < clientEnregAnnee) 
       ){
            return res.json({
                success:false,
                message:"Le client n'a pas été enregistré(e) à cette date"
            }); 
       }

        if((parseInt(year) === parseInt(current_year)) 
            && parseInt(month) > parseInt(current_month)
        ){
            return res.json({
                success:false,
                message:"Mois invalide"
            }); 
       }

       if((parseInt(year) === clientEnregAnnee) 
            && parseInt(month) < parseInt(clientEnregMois)
        ){
            return res.json({
                success:false,
                message:"Mois invalide 2"
            }); 
       }

       const idUser = req.id_user;

       const newPaiement = await paiementService.create(id_menage,idUser,montant);
       
       return res.json({
            success:true,
            message:"Paiement enregistré",
            data:newPaiement
       }); 
    },
    getPaiementForClient:async (req,res)=>{
        const {
            month,
            year,
            id_menage
       } = req.query;
       
       if(!month || !year || !id_menage){
            return res.json({
                success:false,
                message:"Mois,année ou id ménage invalide"
            }); 
       }

       if(isNaN(month) || isNaN(year) || isNaN(id_menage)){
            return res.json({
                success:false,
                message:"Mois, année ou id ménage invalide"
            });
       }

        const paiements = await paiementService.getPaiementForClient(month,year,id_menage);   
        
        return res.json({
            success:true,
            message:"Paiements récupérés",
            data:paiements
        });    
    },
    getPaiementDetail:async (req,res)=>{
        const {
            id_paiement
       } = req.query;

       if(isNaN(id_paiement)){
            return res.json({
                success:false,
                message:"Id paiement invalide"
            });
       }

        const paiements = await paiementService.getPaiementDetailById(id_paiement);   

        return res.json({
            success:true,
            message:"Paiements récupérés",
            data:paiements
        });    
    },
}
