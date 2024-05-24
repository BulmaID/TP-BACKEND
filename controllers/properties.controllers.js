const Property = require('../models/properties');
const getExchangeRate = require('../utils/currencyConverter');

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find(req.query);
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las propiedades', error: error.message });
  }
};

exports.uploadProperty = async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    res.status(201).json({ message: 'Propiedad cargada exitosamente', data: newProperty });
  } catch (error) {
    res.status(400).json({ message: 'Error al cargar la nueva propiedad -' + error.message });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const propertyFound = await Property.findById(req.params.id);
    if (propertyFound) {
      res.status(200).json(propertyFound);
    } else {
      res.status(404).json({ error: 'Id de propiedad no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la propiedad', error: error.message });
  }
};

exports.getPropertyByCity = async (req, res) => {
    try {
        const city = req.params.city;

        if (!city) {
            return res.status(400).json({ error: 'La ciudad es un parámetro requerido' });
        }

        const foundProperties = await Property.find({ city: city });

        if (foundProperties.length > 0) {
            res.status(200).json(foundProperties);
        } else {
            res.status(404).json({ error: `No tenemos ninguna propiedad disponible en la ciudad ${city}` });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar propiedades', details: error.message });
    }
};


exports.updateProperty = async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.status(200).json({ message: 'La propiedad se actualizó con éxito', data: updatedProperty });
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la propiedad -' + error.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const deleteProperty = await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'La propiedad se ha eliminado exitosamente.', data: deleteProperty });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la propiedad -' + error.message });
  }
};

exports.disableProperty = async (req, res) => {
  try {
    const disableProperty = await Property.findByIdAndUpdate(req.params.id, { available: false });
    res.status(200).json({ message: 'La propiedad ya no se encuentra disponible', data: disableProperty });
  } catch (error) {
    res.status(500).json({ message: 'No se ha podido completar su solicitud de baja de la propiedad -' + error.message });
  }
};

exports.getPropertyValueInDollars = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Propiedad no encontrada' });
    }

    const usdToArsRate = await getExchangeRate();
    const propertyValueInDollars = (property.price / usdToArsRate).toFixed(2);

    res.status(200).json({
      property: property,
      valueInDollars: parseFloat(propertyValueInDollars),
      exchangeRate: usdToArsRate
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al calcular el valor de la propiedad en dólares', details: error.message });
  }
};
