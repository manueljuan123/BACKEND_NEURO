const express = require('express')
const controller = require('../controllers/email.controller')
const auth = require('../../src/controllers/auth.controller')
const router = express.Router()
const path = 'email'


// Pedir Restablecimiento de contraseña
router.post(
    `/${path}/request_password`,
    controller.PeticionPassword
)

/* Restablecer contraseña */
router.put(
    `/${path}/reset_password`,
    controller.RestablecerPassword,
)


module.exports = router