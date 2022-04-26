const express = require('express')
const consultaController = require('../controllers/consultas.controller')
const router = express.Router()
const path = 'consultas'

// Ruta Consulta por EMAIL
router.post(
    `/${path}/enviar`,
    consultaController.postConsulta
)

router.get(
    `/${path}/getAll`,
    consultaController.ObtenerConsultas
)

module.exports = router