const Validator = require('body-validator');

module.exports = {
    organisationValidationSchema:function(){
        return [
            {
                name:'denomination',minlength: 3,maxlength:100,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'secteur_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'date_creation',maxlength:50,required: true,stringType:Validator.StringType.Alpha,
            },
            {
                name:'telephone',stringType:Validator.StringType.Numeric,minlength:9,maxlength:10,required:true
            },
            {
                name:'email',stringType:Validator.StringType.Alpha,required:true
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
    organisationUpdateValidationSchema:function(){
        return [      
            {
                name:'denomination',minlength: 3,maxlength:100,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'secteur_id',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'date_creation',maxlength:50,required: true,stringType:Validator.StringType.Alpha,
            },
            {
                name:'telephone',stringType:Validator.StringType.Numeric,minlength:9,maxlength:10,required:true
            },
            {
                name:'email',stringType:Validator.StringType.Alpha,required:true
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