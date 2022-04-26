const bcryptjs = require('bcryptjs')
const conexion = require('../config/database')


exports.ActualizarUsuario = (req, res) => {
        conexion.query(`UPDATE admin SET user = ?`, req.body.nombreNuevo,
        (err, result) => {
            if(err){
                res.status(401).send({
                    status:401,
                    message:"Error",
                    error: err
                })
            }else{
                res.status(200).send({
                    status: 200,
                    message:"Usuario actualizado correctamente"
                })
            }
        })
        
}       

exports.CambiarPassword = async (req, res) => {
    const newPassword = req.body.newPassword
    const newPasswordHash = await bcryptjs.hash(newPassword, 8)

    conexion.query(`UPDATE admin SET password = ?`, newPasswordHash,
    (err, result) => {
        if(err){
            res.send("No se puede cambiar la contraseña")
        }else{
            res.status(200).send({
                status:200,
                message:"Contraseña actualizada con éxito"
            })
        }
    })
}

