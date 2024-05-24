/*Este middleware realiza un filtrado en la petición del usuario para ver todas las propiedades
y sólo le muestra las propiedades que están disponibles al momento de realizar la consulta*/


const filterAvailableProperties = (req, res, next) => {
    if (!req.query) {
      req.query = {};
    }
    req.query.available = true; 
    next();
  };
  
  module.exports = filterAvailableProperties;
  