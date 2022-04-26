const express = require('express')
const controller = require('../controllers/admin.controller')
const router = express.Router()
const path = 'admin'

router.put(
    `/${path}/actualizar_usuario`,
    controller.ActualizarUsuario
)

router.put(
    `/${path}/newPassword`,
    controller.CambiarPassword
)


module.exports = router