const express = require('express')
const encuestaController = require('../controllers/encuesta.controller')
const router = express.Router()
const path = 'encuesta'

// Obtener todas las PQRS
router.get(
    `/${path}/getAll`,
    encuestaController.ObtenerEncuestas
)

// Enviar consulta a la IPS
router.post(
    `/${path}/enviar`,
    encuestaController.postEncuesta
)

module.exports = router