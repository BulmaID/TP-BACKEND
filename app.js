const express = require ('express');
const app = express();
require ('dotenv').config();
const inmoRoutes = require ('./routes/inmoRoutes');
const dbConnect = require('./database/dbConnect');




app.use(express.json());

app.use('/properties', inmoRoutes);

app.get('/', (req,res)=>{
    res.send('<h2> Bienvenidos a nuestra aplicación de Backend Integradora Final</h2>')
})


dbConnect();

module.exports=app;

