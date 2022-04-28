const express = require('express')
const encuestaController = require('../controllers/encuesta.controller')
const router = express.Router()
const path = 'encuesta'

// Enviar consulta a la IPS
router.post(
    `/${path}/enviar`,
    encuestaController.postEncuesta
)

module.exports = router