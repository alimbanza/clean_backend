const Validator = require('body-validator');

module.exports = {
    personnelValidationSchema:function(){
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
                name:'nationalite_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'sexe_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'fonction_id',stringType:Validator.StringType.Numeric,required:true
            }
        ];
    },
    personnelUpdateValidationSchema:function(){
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
                name:'nationalite_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'sexe_id',stringType:Validator.StringType.Numeric,required:true
            }
        ];
    }
}