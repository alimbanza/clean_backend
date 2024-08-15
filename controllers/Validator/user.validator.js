const Validator = require('body-validator');
const user = require('../../models/user');

module.exports = {
    userValidationSchema:function(userData){

        let ValidationPattern =[
            {
                name:'email',stringType:Validator.StringType.Email,required:true
            },
            {
                name:'nom',stringType:Validator.StringType.Alpha,required:true
            },
            {
                name:"password",stringType:Validator.StringType.Alpha,minlength:4,maxlength:30,required:true
            },
            {
                name:"confirm",stringType:Validator.StringType.Alpha,minlength:4,maxlength:30,required:true
            },
            {
                name:'role_id',stringType:Validator.StringType.Numeric,required:true
            }
        ];

        if(userData.role_id == 1){
            ValidationPattern.push({
                name:'organisation_id',stringType:Validator.StringType.Numeric,required:true    
            });
        }

        if(userData.role_id == 2){
            ValidationPattern.push({
                name:'agence_id',stringType:Validator.StringType.Numeric,required:true    
            });
        }

        if(userData.role_id == 3){
            ValidationPattern.push({
                name:'agent_id',stringType:Validator.StringType.Numeric,required:true    
            });
        }

        if(userData.role_id == 4){
            ValidationPattern.push({
                name:'agence_id',stringType:Validator.StringType.Numeric,required:true    
            });
        }

        return ValidationPattern;
    },
    userUpdateValidationSchema:function(userData){

        let validationPattern=[      
            {
                name:'password',stringType:Validator.StringType.Alpha,required:true
            },
            {
                name:"cconfirm",stringType:Validator.StringType.Alpha,minlength:4,maxlength:30,required:true
            }
        ];

        if(user.password != user.cconfirm){
            validationPattern.push({
                name:"password",stringType:Validator.StringType.Alpha,minlength:4,maxlength:30,required:true
            });
        }

        return validationPattern;
    }
}