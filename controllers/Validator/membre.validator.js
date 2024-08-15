const Validator = require('body-validator');

module.exports = {
    membreValidationSchema:function(){
        return [
            {
                name:'numero_piece',minlength: 3,maxlength:100,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'type_piece',stringType:Validator.StringType.Numeric,required:true
            },
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
                name:'sexe_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'etat_civil',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'nationalite_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'nom_pere',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'nom_mere',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'telephone',stringType:Validator.StringType.Numeric,minlength:9,maxlength:10,required:true
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
            }
        ];
    },
    membreUpdateValidationSchema:function(){
        return [      
            {
                name:'numero_piece',minlength: 3,maxlength:100,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'type_piece',stringType:Validator.StringType.Numeric,required:true
            },
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
                name:'sexe_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'etat_civil',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'nationalite_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'nom_pere',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'nom_mere',minlength: 3,maxlength:50,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'telephone',stringType:Validator.StringType.Numeric,minlength:9,maxlength:10,required:true
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
            }
        ];
    }
}