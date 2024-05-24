const { body } = require("express-validator");
const validator = require('validator');

exports.address = body('address')
  .notEmpty().withMessage("La dirección es OBLIGATORIA")
  .isString().withMessage("La dirección debe ser una cadena de texto")
  .isLength({ min: 5, max: 100 }).withMessage("La dirección debe tener entre 5 y 100 caracteres");

exports.city = body('city')
  .notEmpty().withMessage("La ciudad es OBLIGATORIA")
  .isString().withMessage("La ciudad debe ser una cadena de texto")
  .isLength({ min: 2, max: 50 }).withMessage("La ciudad debe tener entre 2 y 50 caracteres");

exports.price = body('price')
  .notEmpty().withMessage("El precio es OBLIGATORIO")
  .isNumeric().withMessage("El campo 'precio' debe ser numérico")
  .isFloat({ min: 0 }).withMessage("El precio debe ser un número positivo");

exports.size = body('size')
  .notEmpty().withMessage("El tamaño en metros cuadrados es OBLIGATORIO")
  .isNumeric().withMessage("El campo 'size' debe ser numérico")
  .isInt({ min: 0 }).withMessage("El tamaño debe ser un número entero positivo");

exports.type = body('type')
  .notEmpty().withMessage("El tipo de propiedad es OBLIGATORIO")
  .isIn(['house', 'apartment', 'commercial']).withMessage("El tipo debe ser 'house', 'apartment' o 'commercial'");

exports.status = body('status')
  .notEmpty().withMessage("El estado de la propiedad es OBLIGATORIO")
  .isIn(['forSale', 'forRent', 'reserved']).withMessage("El estado debe ser 'forSale', 'forRent' o 'reserved'");

exports.description = body('description')
  .optional()
  .isString().withMessage("La descripción debe ser una cadena de texto")
  .isLength({ max: 500 }).withMessage("La descripción debe tener menos de 500 caracteres");

exports.images = body('images')
  .optional()
  .isArray().withMessage('Las imágenes deben ser un array')
  .custom((images) => {
    images.forEach((image) => {
      if (!validator.isURL(image)) {
        throw new Error("Cada imagen debe ser una URL válida");
      }
    });
    return true;
  });

  exports.available = body('available')
  .optional()
  .isBoolean()
  .withMessage('La disponibilidad de la popiedad debe ser un valor booleano, "true" o "false"');

exports.bedrooms = body('bedrooms')
  .notEmpty().withMessage("La cantidad de habitaciones es OBLIGATORIA")
  .isInt({ min: 0 }).withMessage("El número de dormitorios debe ser un número entero positivo");

exports.bathrooms = body('bathrooms')
  .notEmpty().withMessage("La cantidad de baños es OBLIGATORIA")
  .isInt({ min: 0 }).withMessage("El número de baños debe ser un número entero positivo");

exports.garage = body('garage')
  .notEmpty().withMessage("El campo garage es OBLIGATORIO")
  .isBoolean().withMessage("El valor del campo 'garage' debe ser 'true' o 'false'");

exports.pool = body('pool')
  .notEmpty().withMessage("El campo 'pool' es OBLIGATORIO")
  .isBoolean().withMessage("El valor del campo 'pool' debe ser 'true' o 'false'");

exports.livingRoom = body('livingRoom')
  .notEmpty().withMessage("El campo 'livingRoom' es OBLIGATORIO")
  .isBoolean().withMessage("El valor del campo 'livingRoom' debe ser 'true' o 'false'");

exports.kitchen = body('kitchen')
  .notEmpty().withMessage("El campo 'kitchen' es OBLIGATORIO")
  .isBoolean().withMessage("El valor del campo 'kitchen' debe ser 'true' o 'false'");

exports.diningRoom = body('diningRoom')
  .notEmpty().withMessage("El campo 'diningRoom' es OBLIGATORIO")
  .isBoolean().withMessage("El valor del campo 'diningRoom' debe ser 'true' o 'false'");

