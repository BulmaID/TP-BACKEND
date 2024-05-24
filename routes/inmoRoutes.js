const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/properties.controllers");
const filterAvailableProperties = require('../middlewares/filterAvailableProperties'); 

const {
  address,
  city,
  price,
  size,
  type,
  status,
  description,
  images,
  available,
  bedrooms,
  bathrooms,
  garage,
  pool,
  livingRoom,
  kitchen,
  diningRoom,
} = require("../utils/validators");
const validate = require('../middlewares/validate');

router.get("/", filterAvailableProperties, propertyController.getProperties);
router.get("/:id", propertyController.getPropertyById);
router.get("/searchCity/:city", propertyController.getPropertyByCity);
router.post(
  "/uploadProperty",
  [
    address,
    city,
    price,
    size,
    type,
    status,
    description,
    images,
    available,
    bedrooms,
    bathrooms,
    garage,
    pool,
    livingRoom,
    kitchen,
    diningRoom,
  ], validate,
  propertyController.uploadProperty
);
router.put("/updateProperty/:id", [
  address,
  city,
  price,
  size,
  type,
  status,
  description,
  images,
  available,
  bedrooms,
  bathrooms,
  garage,
  pool,
  livingRoom,
  kitchen,
  diningRoom,
], validate, propertyController.updateProperty);
router.delete("/delete/:id", propertyController.deleteProperty);
router.delete("/disableProperty/:id", propertyController.disableProperty);
router.get('/:id/value-in-dollars', propertyController.getPropertyValueInDollars);

module.exports = router;
