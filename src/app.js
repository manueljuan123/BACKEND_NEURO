const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

// Settings
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(require('./routes/pqrs.routes'));
app.use(require('./routes/consultas.routes'));
app.use(require('./routes/encuesta.routes'));

// Variables de entorno
require('dotenv').config()

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})