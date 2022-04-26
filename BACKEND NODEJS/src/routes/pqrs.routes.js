const express = require('express')
const pqrsController = require('../controllers/pqrs.controller')
const router = express.Router()
const path = 'pqrs'

// RUTA ENVIAR PQRS
router.post(
    `/${path}/enviar_pqrs`,
    pqrsController.postPQRS
)

// RUTA CONTESTAR PQRS
router.post(
    `/${path}/contestar_pqrs`,
    pqrsController.ResPQRS
)

// RUTA OBTENER TODAS LAS PQRS
router.get(
    `/${path}/getAll`,
    pqrsController.ObtenerPQRS
)

// RUTA PARA OBTENER SOLO UNA PQRS EN ESPECÍFICO
router.get(
    `/${path}/getOne/:id`,
    pqrsController.OnePQRS
)


module.exports = router