const express = require('express')
const authController = require('../controllers/auth.controller')
const router = express.Router()
const path = 'auth'

router.get(
    `/${path}/1991`, // El 1991 como ruta hace la función de contraseña
    authController.PreventLogin
)

router.post(
    `/${path}/login`,
    authController.AdminLogin
)

router.post(
    `/${path}/ensureResetToken`,
    authController.EnsureResetToken
)

router.post(
    `/${path}/register`,
    authController.OneRegister
)

module.exports = router