const app = require('../app');
const PORT= 8080;


app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto: ${PORT}. Acceda a http://localhost:${PORT}`)
});