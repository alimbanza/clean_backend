const Validator = require('body-validator');

module.exports = {
    compteValidationSchema:function(){
        return [
            {
                name:'im',minlength: 3,maxlength:100,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'type_compte',stringType:Validator.StringType.Numeric,required:true
            },
            {
                name:'devise_id',stringType:Validator.StringType.Numeric,required:true
            }
        ];
    },
    compteUpdateValidationSchema:function(){
        return [      
            {
                name:'pin',minlength: 3,maxlength:100,stringType:Validator.StringType.Alpha,required: true 
            },
            {
                name:'compte_id',stringType:Validator.StringType.Numeric,required:true
            }
        ];
    }
}