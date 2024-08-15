const Validator = require('body-validator');

module.exports = {
    agenceValidationSchema:function(){
        return [
            {
                name:'denomination',minlength: 3,maxlength:100,stringType:Validator.StringType.Alpha,required: true 
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
    agenceUpdateValidationSchema:function(){
        return [      
            {
                name:'denomination',minlength: 3,maxlength:100,stringType:Validator.StringType.Alpha,required: true 
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
                name:'agence_id',stringType:Validator.StringType.Numeric,required:true
            }
        ];
    }
}