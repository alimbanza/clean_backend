const Validator = require('body-validator');

module.exports = {
    agentValidationSchema:function(){
        return [
            {
                name:'nom',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'postnom',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'prenom',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'date_naissance',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'lieu_naissance',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'etat_civil',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'sexe_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'avenue',stringType:Validator.StringType.Alpha,required:true
            },
            {
                name:'numero_parcel',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'quartier',stringType:Validator.StringType.Alpha,required:true
            },
            {
                name:'commune_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'telephone',stringType:Validator.StringType.Numeric,minlength:9,maxlength:10,required:true
            },
            {
                name:'forme_juridique_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'etablissement_name',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'profession_id',stringType:Validator.StringType.Numeric,required:true
            },
        ];
    },
    agentUpdateValidationSchema:function(){
        return [      
            
        ];
    }
}