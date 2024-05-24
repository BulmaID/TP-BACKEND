const axios = require('axios');

const getExchangeRate = async () => {
  try {
    const response = await axios.get('https://v6.exchangerate-api.com/v6/37e954c56d826f5613028adb/pair/USD/ARS');
    return response.data.conversion_rate;
  } catch (error) {
    console.error('Error al obtener el tipo de cambio:', error);
    throw new Error('No se puede obtener el tipo de cambio');
  }
};

module.exports = getExchangeRate;


