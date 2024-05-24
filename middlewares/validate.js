const {validationResult} = require ('express-validator');

const validate =(req,res,next)=>{
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({
            message: "Error de validación", errors: errores.array()
        })
    }else{
        next()
    }
}

module.exports = validate;