const express = require('express')
const pqrsController = require('../controllers/pqrs.controller')
const router = express.Router()
const path = 'pqrs'

// RUTA ENVIAR PQRS
router.post(
    `/${path}/enviar`,
    pqrsController.postPQRS,
)

module.exports = router