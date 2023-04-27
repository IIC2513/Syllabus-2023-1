const dotenv = require('dotenv');



const app = require('./app');


// dotenv.config();
// const { API_PORT } = process.env;


// Vamos a definir un puerto fijo, después lo podemos cambiar con dotenv
const API_PORT = 4001;

app.listen(API_PORT, (err) => {
    if (err) {
    return console.error('failed', err);
    }
    console.log(`Listening on port ${API_PORT}`);
});