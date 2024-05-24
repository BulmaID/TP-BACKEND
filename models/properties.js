const { Schema, model } = require('mongoose');

const propertySchema = new Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true }, // tamaño en metros cuadrados
    type: { type: String, enum: ['house', 'apartment', 'commercial'], required: true },
    status: { type: String, enum: ['forSale', 'forRent', 'reserved'], required: true },
    description: { type: String },
    images: [{ type: String }],
    available: { type: Boolean, default: true },
    bedrooms: { type: Number, required: true }, // número de dormitorios
    bathrooms: { type: Number, required: true }, // número de baños
    garage: { type: Boolean, required: true }, // cochera
    pool: { type: Boolean, required: true }, // piscina
    livingRoom: { type: Boolean, required: true }, // living
    kitchen: { type: Boolean, required: true }, // cocina
    diningRoom: { type: Boolean, required: true } // comedor
}, { timestamps: true });

const Property = model('Property', propertySchema);

module.exports = Property;


